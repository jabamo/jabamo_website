FROM node:24-alpine AS build

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:24-alpine AS runner

WORKDIR /app

RUN apk add --no-cache libc6-compat libstdc++ wget \
    && mkdir -p /app/.data \
    && chown -R node:node /app

USER node

COPY --chown=node:node --from=build /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
