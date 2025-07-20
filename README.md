# Persönliche Portfolio-Website

Eine moderne, performante Portfolio-Website entwickelt mit Nuxt.js 4, die als Showcase für Projekte, Blog-Artikel und berufliche Erfahrungen dient. Die Website wurde als privates Projekt entwickelt, um meine Fähigkeiten als angehender Full-Stack Developer zu präsentieren und gleichzeitig moderne Webtechnologien zu erlernen.

## Überblick

Diese Website präsentiert mein Portfolio als angehender Full-Stack Developer mit Fokus auf Backend-Entwicklung. Sie zeigt meine Projekte, Blog-Artikel über Entwicklung und Studium, sowie meine beruflichen Erfahrungen und technischen Fähigkeiten.

**Live-Version:** [https://jonabastian.io](https://jonabastian.io)

## Technische Architektur

### Framework und Grundlagen
- **Nuxt.js 4** - Vue.js Meta-Framework mit Server-Side Rendering
- **Vue 3** - Composition API mit TypeScript
- **TypeScript** - Statische Typisierung für bessere Code-Qualität
- **Vite** - Build-Tool für schnelle Entwicklung

### Styling und Design
- **Tailwind CSS** - Utility-First CSS Framework
- **@nuxtjs/color-mode** - Dark/Light Mode Support mit automatischer Erkennung
- **@nuxt/fonts** - Optimiertes Font-Management für Performance
- **@nuxt/icon** - Icon-System mit Tabler Icons

### Content Management
- **@nuxt/content** - Headless CMS für Blog-Artikel und Projekte
- **Zod Schema Validation** - Type-sichere Content-Validierung
- **Markdown** - Content-Format mit Custom Prose-Komponenten

### Testing und Qualitätssicherung
- **Vitest** - Unit Testing Framework
- **@vue/test-utils** - Vue-Komponenten Testing
- **Happy-DOM** - Browser-Simulation für Tests
- **Playwright-Core** - End-to-End Testing
- **@nuxt/eslint** - Code-Qualität und Stil-Enforcement

### DevOps und Deployment
- **GitHub Actions** - CI/CD Pipeline für automatisierte Tests
- **Codecov** - Test-Coverage-Analyse
- **Static Site Generation** - Optimierte Performance durch Prerendering

## Projektstruktur

```
jabamo_website/
├── app/                          # Nuxt App Directory
│   ├── components/               # Vue-Komponenten
│   │   ├── content/              # Prose-Komponenten für Nuxt Content
│   │   ├── ExperienceCards.vue   # Technologie-Erfahrungen
│   │   ├── HeroSection.vue       # Hauptbereich der Startseite
│   │   ├── RecentProjects.vue    # Neueste Projekte
│   │   └── ...                   # Weitere UI-Komponenten
│   ├── pages/                    # Seiten-Routing
│   │   ├── blog/                 # Blog-Artikel-Seiten
│   │   ├── projects/             # Projekt-Portfolio-Seiten
│   │   ├── legal/                # Impressum und Datenschutz
│   │   └── ...                   # Weitere Seiten
│   ├── assets/                   # Statische Assets
│   ├── utils/                    # Hilfsfunktionen
│   └── error.vue                 # 404-Error-Page
├── content/                      # Content-Verzeichnis
│   ├── blog/                     # Blog-Artikel (Markdown)
│   └── projects/                 # Projekt-Dokumentationen (Markdown)
├── public/                       # Statische Dateien
│   ├── assets/img/               # Bilder für Projekte und Blog
│   └── fonts/                    # Lokal gehostete Schriftarten
├── tests/                        # Test-Verzeichnis
│   ├── components/               # Komponenten-Tests
│   ├── pages/                    # Seiten-Tests
│   └── e2e/                      # End-to-End Tests
├── .github/workflows/            # CI/CD Pipeline
└── server/                       # Server-spezifische Konfiguration
```

## Installation und Setup

### Voraussetzungen
- Node.js (Version 18+ oder 20+)
- npm, pnpm oder yarn

### Entwicklungsumgebung einrichten

1. **Repository klonen:**
```bash
git clone https://github.com/jabamo/jabamo_website.git
cd jabamo_website
```

2. **Abhängigkeiten installieren:**
```bash
npm install
# oder
pnpm install
# oder
yarn install
```

3. **Entwicklungsserver starten:**
```bash
npm run dev
# oder
pnpm dev
# oder
yarn dev
```

Die Website ist dann unter `http://localhost:3000` erreichbar.

## Verfügbare Scripts

### Entwicklung
- `npm run dev` - Startet den Entwicklungsserver
- `npm run lint` - Führt ESLint-Prüfung durch
- `npm run lint:fix` - Behebt automatisch ESLint-Probleme

### Testing
- `npm run test` - Führt alle Tests im Watch-Modus aus
- `npm run test:watch` - Kontinuierliche Test-Ausführung
- `npm run test:coverage` - Tests mit Coverage-Analyse

### Production
- `npm run build` - Erstellt Production-Build
- `npm run generate` - Generiert statische Website
- `npm run preview` - Vorschau der Production-Version

## Komponentenarchitektur

### UI-Komponenten
- **AppHeader** - Responsive Navigation mit Dark-Mode-Toggle
- **AppFooter** - Footer mit Copyright und rechtlichen Links
- **HeroSection** - Hauptbereich mit Vorstellung und Call-to-Actions
- **ExperienceCards** - Darstellung technischer Fertigkeiten
- **RecentProjects** - Showcase der neuesten Projekte
- **SocialLinks** - Verknüpfungen zu sozialen Medien

### Content-Komponenten
- **BlogCard** - Artikel-Vorschau mit Metadaten
- **ProjectCard** - Projekt-Präsentation mit Details
- **AboutTimeline** - Chronologische Darstellung von Erfahrungen

### Prose-Komponenten (Nuxt Content)
Angepasste Markdown-Komponenten für bessere Darstellung:
- **ProseA** - Styled Links mit Icons
- **ProseCode** - Syntax-Highlighting für Code
- **ProseImg** - Responsive Bilder mit Captions
- **ContentSlider** - Interaktive Bildergalerien
- **TipBox** - Hervorgehobene Hinweise und Tips

## Content-Management

### Blog-Artikel
Blog-Artikel werden als Markdown-Dateien in `content/blog/` gespeichert mit folgendem Schema:

```yaml
---
title: "Artikel-Titel"
description: "Kurze Beschreibung"
image: "/assets/img/blog/artikel/thumbnail.jpg"
tags: ["Tag1", "Tag2"]
category: "Kategorie"
author: "Autor"
date: "YYYY-MM-DD"
readTime: "5 min"
featured: true/false
published: true/false
---
```

### Projekte
Projekt-Dokumentationen in `content/projects/` mit Schema:

```yaml
---
title: "Projekt-Name"
description: "Projekt-Beschreibung"
image: "/assets/img/projects/projekt/preview.jpg"
technologies: ["Tech1", "Tech2"]
github: "https://github.com/user/repo"
demo: "https://projekt-url.com"
featured: true/false
category: "Kategorie"
date: "YYYY-MM-DD"
status: "Status"
duration: "Zeitraum"
role: "Rolle"
---
```

## Testing-Strategie

### Unit Tests
- Komponenten-Tests mit Vue Test Utils
- Props, Events und Slot-Testing
- Dark-Mode-Kompatibilität
- Responsive Verhalten

### End-to-End Tests
- Vollständige Seitennavigation
- SEO-Validierung
- Performance-Tests
- Error-Handling (404-Seiten)

### Coverage-Ziele
- Mindestens 80% Code-Coverage
- Alle kritischen User-Flows abgedeckt
- Automatische Coverage-Berichterstattung via Codecov

## CI/CD Pipeline

Die GitHub Actions Pipeline führt bei jedem Push und Pull Request im Main folgende Schritte aus:

1. **Code-Qualität:** ESLint-Prüfung
2. **Unit Tests:** Komponenten- und Utility-Tests
3. **Coverage:** Test-Abdeckungsanalyse
4. **E2E Tests:** Integration-Tests aller Seiten
5. **Build:** Production-Build-Validierung
6. **Deployment:** Statische Site-Generierung

## Performance-Optimierungen

### Font-Management
- Lokales Hosting der Schriftarten (DSGVO-konform)
- Automatische Font-Format-Optimierung
- Fallback-Fonts zur Vermeidung von Layout-Shifts

### Build-Optimierungen
- Code-Splitting pro Route
- Tree-Shaking für kleinere Bundle-Größen
- Image-Optimierung für Web-Performance
- Critical CSS Inlining

### SEO-Optimierungen
- Server-Side Rendering für bessere Indexierung
- Meta-Tags und Open Graph für Social Media
- Structured Data für Rich Snippets
- XML-Sitemap-Generierung

## Entwicklungsrichtlinien

### Code-Stil
- TypeScript für alle neuen Dateien
- ESLint-Konfiguration wird durchgesetzt
- Konsistente Namenskonventionen

### Git-Workflow
- Feature-Branches für neue Entwicklungen
- Descriptive Commit-Messages
- Pull Requests für Code-Reviews
- Automatisierte Tests vor Merge

### Komponenten-Entwicklung
- Props mit TypeScript-Interfaces
- Emits für Parent-Child-Kommunikation
- Slots für flexible Content-Injection
- Responsive Design als Standard

## Browser-Kompatibilität

- Chrome/Chromium (neueste Versionen)
- Firefox (neueste Versionen)
- Safari (neueste Versionen)
- Edge (neueste Versionen)

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Details siehe [LICENSE](LICENSE) Datei.

## Kontakt

Bei Fragen zum Projekt oder technischen Details:
- **Email:** jb@jonabastian.io
- **GitHub:** [@jabamo](https://github.com/jabamo)
- **Website:** [jonabastian.io](https://jonabastian.io)

## Danksagungen

Dieses Projekt nutzt verschiedene Open-Source-Technologien und -Bibliotheken. Besonderer Dank an alle Maintainer und Contributors folgender Projekte:

### Core Framework
- **[Nuxt.js](https://nuxt.com/)** - Das Vue.js Meta-Framework, das diese Website antreibt
- **[Vue.js](https://vuejs.org/)** - Das progressive JavaScript Framework
- **[Vite](https://vitejs.dev/)** - Build-Tool und Development-Server

### Content & UI
- **[@nuxt/content](https://content.nuxt.com/)** - Headless CMS für Markdown-basiertes Content-Management
- **[@nuxt/icon](https://github.com/nuxt/icon)** - Icon-Framework mit Tabler Icons
- **[@iconify-json/tabler](https://tabler-icons.io/)** - Umfangreiche Icon-Sammlung
- **[Swiper](https://swiperjs.com/)** - Touch-Slider für interaktive Bildergalerien
- **[@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/)** - Utility-First CSS Framework Integration

### Styling & Design
- **[@nuxtjs/color-mode](https://color-mode.nuxtjs.org/)** - Dark/Light Mode Support
- **[@nuxt/fonts](https://fonts.nuxt.com/)** - Optimiertes Font-Management und Performance
- **[@nuxtjs/sitemap](https://sitemap.nuxtjs.org/)** - Automatische XML-Sitemap-Generierung

### Testing & Development
- **[Vitest](https://vitest.dev/)** - Schnelles Unit-Testing-Framework
- **[@vue/test-utils](https://test-utils.vuejs.org/)** - Vue-Komponenten-Testing-Utilities
- **[Happy-DOM](https://github.com/capricorn86/happy-dom)** - Leichtgewichtige DOM-Simulation für Tests
- **[Playwright Core](https://playwright.dev/)** - End-to-End Testing Engine
- **[@nuxt/test-utils](https://nuxt.com/docs/getting-started/testing)** - Nuxt-spezifische Test-Utilities

### Code Quality & Build
- **[@nuxt/eslint](https://eslint.nuxt.com/)** - ESLint-Integration für Code-Qualität
- **[ESLint](https://eslint.org/)** - JavaScript/TypeScript Linter
- **[TypeScript](https://www.typescriptlang.org/)** - Statische Typisierung für JavaScript

### Database & Storage
- **[Better-SQLite3](https://github.com/WiseLibs/better-sqlite3)** - Hochperformante SQLite-Datenbankanbindung

Diese Open-Source-Projekte ermöglichen moderne Webentwicklung und machen Projekte wie dieses möglich. Vielen Dank an die gesamte Open-Source-Community!
