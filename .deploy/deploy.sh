#!/usr/bin/env bash
# =============================================================================
# Server-seitiges Deployment-Skript (Nuxt SSR)
# =============================================================================
set -euo pipefail

IMAGE_TAG="${SSH_ORIGINAL_COMMAND:-}"

# =============================================================================
# 1. Variablen & Registry-Credentials aus STDIN lesen
# =============================================================================
read -r REGISTRY_USER
read -r REGISTRY_PASSWORD
read -r PROJECT_DIR
read -r COMPOSE_PROJECT_NAME
read -r NODE_ENV
read -r HOST
read -r PORT

REGISTRY_BASE="${REGISTRY_BASE:-ghcr.io/jabamo/jabamo_website}"
IMAGE_APP="${REGISTRY_BASE}:${IMAGE_TAG}"

COMPOSE_FILE="${PROJECT_DIR}/docker-compose.prod.yml"
ENV_FILE="${PROJECT_DIR}/.env"
LOG_FILE="${COMPOSE_PROJECT_NAME}-deploy.log"
LAST_TAG_FILE=".last_deployed_tag_${COMPOSE_PROJECT_NAME}"
CONTAINER_NAME="${COMPOSE_PROJECT_NAME}_app"

PREVIOUS_TAG=""
if [ -f "$LAST_TAG_FILE" ]; then
    PREVIOUS_TAG=$(cat "$LAST_TAG_FILE")
fi

log() {
    local msg="[$(date -Iseconds)] $*"
    echo "$msg"
    echo "$msg" >> "$LOG_FILE" 2>/dev/null || true
}

write_env_file() {
    local target_image="$1"
    cat > "$ENV_FILE" <<EOF
COMPOSE_PROJECT_NAME=${COMPOSE_PROJECT_NAME}
NODE_ENV=${NODE_ENV}
HOST=${HOST}
PORT=${PORT}
IMAGE_APP=${target_image}
EOF
    chmod 640 "$ENV_FILE"
}

rollback() {
    if [ -n "$PREVIOUS_TAG" ]; then
        log "WARNUNG: Rollback wird eingeleitet – Ziel-Tag: $PREVIOUS_TAG"

        local rollback_image="${REGISTRY_BASE}:${PREVIOUS_TAG}"

        # Nur pullen, falls das vorherige Image lokal nicht mehr vorhanden ist
        if ! docker image inspect "$rollback_image" >/dev/null 2>&1; then
            log "Vorheriges Image nicht lokal gefunden, ziehe aus Registry..."
            docker pull "$rollback_image"
        fi

        write_env_file "$rollback_image"

        docker compose \
            --env-file "$ENV_FILE" \
            -f "$COMPOSE_FILE" \
            up -d --no-deps --pull never app

        log "Rollback auf $PREVIOUS_TAG abgeschlossen."
    else
        log "FEHLER: Kein vorheriger Tag in $LAST_TAG_FILE gefunden – manueller Eingriff erforderlich!"
    fi

    exit 1
}

# =============================================================================
# 2. Sicherheitschecks
# =============================================================================
if ! [[ "$IMAGE_TAG" =~ ^[a-zA-Z0-9_.-]+$ ]]; then
    log "FEHLER: Ungültiger Image-Tag '$IMAGE_TAG' – Deployment abgebrochen."
    exit 1
fi

if [[ -z "$REGISTRY_USER" || -z "$REGISTRY_PASSWORD" || -z "$PROJECT_DIR" || -z "$COMPOSE_PROJECT_NAME" ]]; then
    log "FEHLER: Erforderliche Variablen aus STDIN fehlen."
    exit 1
fi

# =============================================================================
# 3. .env im Projektordner schreiben
# =============================================================================
log "Aktualisiere $ENV_FILE..."
write_env_file "$IMAGE_APP"

# =============================================================================
# 4. Registry Login
# =============================================================================
DOCKER_CONFIG=$(mktemp -d)
chmod 700 "$DOCKER_CONFIG"
export DOCKER_CONFIG
trap 'rm -rf "$DOCKER_CONFIG"' EXIT

log "Melde mich an der Container Registry an..."
if ! echo "$REGISTRY_PASSWORD" | docker login "$(echo "$REGISTRY_BASE" | cut -d/ -f1)" \
    -u "$REGISTRY_USER" \
    --password-stdin; then
    log "FEHLER: Registry-Login fehlgeschlagen."
    exit 1
fi

# =============================================================================
# 5. Deployment starten
# =============================================================================
log "======================================================"
log "=== Nuxt SSR Deployment gestartet: $IMAGE_TAG (User: $(whoami)) ==="
log "======================================================"

log "Ziehe neues Image: $IMAGE_APP"
if ! docker pull "$IMAGE_APP"; then
    log "FEHLER: Image-Pull fehlgeschlagen."
    exit 1
fi

log "Aktualisiere Container ($CONTAINER_NAME)..."
docker compose \
    --env-file "$ENV_FILE" \
    -f "$COMPOSE_FILE" \
    up -d --no-deps --pull never app

# =============================================================================
# 6. Healthcheck (mit Retry-Schleife & Rollback bei Fehler)
# =============================================================================
log "Warte auf Container-Start und prüfe HTTP-Antwort auf Port ${PORT}..."
HEALTHY=false

for i in {1..10}; do
    sleep 2

    IS_RUNNING=$(docker inspect --format='{{.State.Running}}' "$CONTAINER_NAME" 2>/dev/null || echo "false")
    if [ "$IS_RUNNING" != "true" ]; then
        log "FEHLER: Container ($CONTAINER_NAME) ist gestoppt/abgestürzt (Versuch $i/10)!"
        break
    fi

    if docker exec "$CONTAINER_NAME" wget --spider -q "http://localhost:${PORT}/" 2>/dev/null; then
        HEALTHY=true
        log "Healthcheck erfolgreich (nach $((i * 2))s)."
        break
    fi

    log "Container startet noch... (Versuch $i/10)"
done

if [ "$HEALTHY" != "true" ]; then
    log "FEHLER: Healthcheck für $CONTAINER_NAME fehlgeschlagen – Rollback wird eingeleitet!"
    rollback
fi

# =============================================================================
# 7. Abschluss & Cleanup (behält aktuellen Tag, vorherigen Tag & latest)
# =============================================================================
echo "$IMAGE_TAG" > "$LAST_TAG_FILE"

log "Bereinige alte Docker-Images..."
KEEP_PATTERN=":(${IMAGE_TAG}|latest"
if [ -n "$PREVIOUS_TAG" ]; then
    KEEP_PATTERN="${KEEP_PATTERN}|${PREVIOUS_TAG}"
fi
KEEP_PATTERN="${KEEP_PATTERN})$"

OLD_IMAGES=$(docker images "${REGISTRY_BASE}" --format "{{.Repository}}:{{.Tag}}" | grep -v -E "$KEEP_PATTERN" || true)
if [ -n "$OLD_IMAGES" ]; then
    echo "$OLD_IMAGES" | while read -r img; do
        [ -n "$img" ] && docker rmi "$img" 2>/dev/null || true
    done
fi

docker image prune -f 2>/dev/null || true

log "======================================================"
log "=== Deployment erfolgreich abgeschlossen: $IMAGE_TAG ==="
log "======================================================"