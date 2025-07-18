---
title: "Persönliche Website"
description: "Eine moderne Portfolio-Website mit Nuxt.js, die Projekte und Blog-Artikel dynamisch über Nuxt Content verwaltet."
image: "/assets/img/projects/personal-website/portfolio.png"
technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "Nuxt Content"]
github: "https://github.com/jabamo/jabamo_website"
demo: "https://jonabastian.io"
featured: true
category: "Webentwicklung"
date: "2025-07-15"
status: "Live"
duration: "2 Wochen"
role: "Entwickler"
---

# Meine persönliche Website - Ein Deep Dive

::TipBox{title="Projekt-Highlights"}
Diese Website, auf der du gerade liest, ist selbst ein Projekt! Ich habe sie entwickelt, um meine Fähigkeiten als Fullstack-Developer zu demonstrieren und gleichzeitig eine performante, moderne Webplattform zu schaffen.
::

## Projektübersicht

Als Student der Digitalen Mediensysteme an der THM wollte ich eine Website erstellen, die nicht nur meine Projekte und Fähigkeiten präsentiert, sondern auch als technisches Showcase dient. Die Herausforderung bestand darin, eine Website zu entwickeln, die sowohl optisch ansprechend als auch technisch fortschrittlich ist.

::ContentSlider{:autoplay="false" :autoplayDelay="4000" size="medium" title="Website-Impressionen" :slides='[{"src": "/assets/img/projects/personal-website/overview_1.png", "alt": "Startseite der Website", "caption": "Die Startseite mit Hero-Section und Projekt-Übersicht"}, {"src": "/assets/img/projects/personal-website/overview_2.png", "alt": "Projekt-Detailansicht", "caption": "Detailansicht eines Projekts mit ContentSlider"}, {"src": "/assets/img/projects/personal-website/navbar.png", "alt": "Navigation der Website", "caption": "Responsive Navigation mit Dark Mode Toggle"}, {"src": "/assets/img/projects/personal-website/portfolio.png", "alt": "Portfolio-Übersicht", "caption": "Portfolio-Seite mit Projekt-Cards und Filtern"}]'}
::

## Technische Architektur

### Das Fundament: Nuxt.js v4

Ich habe mich für **Nuxt.js 4** als Framework entschieden, da es die perfekte Balance zwischen Entwicklerfreundlichkeit und Performance bietet. Die wichtigsten Konfigurationen in der `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},

    modules: [
        '@nuxt/content',
        '@nuxt/eslint', 
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxtjs/color-mode',
        '@nuxtjs/sitemap',
        '@nuxtjs/tailwindcss'
    ],

    // Tailwind CSS Konfiguration
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        config: {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f8fafc',
                            100: '#f1f5f9',
                            500: '#64748b',
                            900: '#0f172a',
                        },
                        accent: {
                            500: '#3b82f6',
                            600: '#2563eb',
                        }
                    },
                    fontFamily: {
                        'title': ['Jetbrains Mono', 'monospace'],
                        'content': ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    }
})
```

### Content Management mit Nuxt Content

Das Herzstück der Website ist das **Content Management System** basierend auf Nuxt Content. Ich habe eine strukturierte Konfiguration erstellt, die sowohl Blog-Artikel als auch Projekte verwaltet:

```typescript
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: 'blog/*.md',
            type: 'page',
            schema: z.object({
                title: z.string().min(1, "Titel ist erforderlich"),
                description: z.string().min(1, "Beschreibung ist erforderlich"),
                image: z.string().min(1, "Bild ist erforderlich"),
                tags: z.array(z.string()),
                category: z.string().min(1, "Kategorie ist erforderlich"),
                author: z.string().min(1, "Autor ist erforderlich"),
                date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Datum muss im Format YYYY-MM-DD sein"),
                readTime: z.string().max(10, "Zeitdauer darf maximal 10 Zeichen lang sein"),
                featured: z.boolean().default(false),
                published: z.boolean().default(true),
            })
        }),
        projects: defineCollection({
            source: 'projects/*.md',
            type: 'page',
            schema: z.object({
                title: z.string().min(1, "Titel ist erforderlich"),
                description: z.string().min(1, "Beschreibung ist erforderlich"),
                image: z.string().min(1, "Bild ist erforderlich"),
                technologies: z.array(z.string()).min(1, "Technologien sind erforderlich"),
                github: z.string(),
                demo: z.string(),
                featured: z.boolean().default(false),
                category: z.string().min(1, "Kategorie ist erforderlich"),
                date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Datum muss im Format YYYY-MM-DD sein"),
                status: z.string().min(1, "Status ist erforderlich"),
                duration: z.string().min(1, "Dauer ist erforderlich"),
                role: z.string().min(1, "Rolle ist erforderlich")
            })
        })
    }
})
```

::HighlightBox{title="Warum Zod Schema Validation?"}
Durch die Zod-Schema-Validierung stelle ich sicher, dass alle Blog-Artikel und Projekte die erforderlichen Metadaten haben. Dies verhindert Runtime-Fehler und macht die Content-Erstellung konsistent.
::

## Design-System und Styling

### Tailwind CSS als Foundation

Ich habe ein **konsistentes Design-System** entwickelt, das auf Tailwind CSS basiert. Das System umfasst:

- **Farbpalette**: Durchdachte Primary-, Secondary- und Accent-Farben
- **Typography**: Jetbrains Mono für Headlines, Inter für Content
- **Spacing**: Konsistente Abstände und Layouts
- **Components**: Wiederverwendbare UI-Komponenten

### Dark Mode Implementation

Die Dark Mode-Funktionalität war mir besonders wichtig. Ich habe sie mit `@nuxtjs/color-mode` umgesetzt:

```typescript
colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
}
```

Das System erkennt automatisch die Präferenz des Benutzers und speichert sie lokal. In der `app.vue` habe ich sanfte Übergänge implementiert:

```vue
<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
    <Header/>
    
    <!-- Vertikale Trennlinien als Design-Element -->
    <div class="fixed inset-0 pointer-events-none z-50">
      <div class="max-w-5xl mx-auto h-full relative">
        <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
        <div class="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
      </div>
    </div>
    
    <main class="pt-10">
      <NuxtPage/>
    </main>
    
    <Footer/>
  </div>
</template>
```

## Custom Prose-Komponenten

Ein besonderes Feature sind die **Custom Prose-Komponenten**, die ich für Nuxt Content entwickelt habe. Diese ermöglichen es mir, Markdown-Inhalte mit interaktiven Elementen zu erweitern:

### Beispiel: Code-Komponente

```vue
<template>
  <code class="bg-gray-100 dark:bg-gray-800 text-accent-600 dark:text-accent-400 px-2 py-1 rounded font-title text-sm border border-gray-200 dark:border-gray-700">
    <slot />
  </code>
</template>
```

Diese Komponente styled automatisch `inline code` und passt sich an den Dark Mode an.

### Interaktive Komponenten

Ich habe auch komplexere Komponenten entwickelt:

- **ContentSlider**: Für Bildergalerien mit Autoplay und Navigation
- **TipBox**: Für Hinweise und wichtige Informationen
- **HighlightBox**: Für besondere Hervorhebungen
- **ProseA**: Für schön gestylte Links mit Icons

## Performance-Optimierungen

### Server-Side Rendering

Durch Nuxt.js' **Server-Side Rendering** erreiche ich:
- Schnelle First Contentful Paint (FCP)
- Bessere SEO-Performance
- Improved Core Web Vitals

### Code Splitting

Nuxt.js splittet automatisch den Code in kleinere Chunks:
- Jede Seite lädt nur den benötigten Code
- Komponenten werden lazy geladen
- Optimal für Performance

### Bildoptimierung

Ich nutze das `@nuxt/image` Modul für:
- Automatische WebP-Konvertierung
- Responsive Breakpoints
- Lazy Loading von Bildern

## Technische Herausforderungen

### 1. SEO-Optimierung

::TipBox{title="SEO Challenge"}
Dynamische Inhalte SEO-freundlich zu gestalten war eine der größten Herausforderungen.
::

**Lösung**: Ich habe für jede Seite individuelle Meta-Tags implementiert:

```typescript
useHead({
  title: 'Projekt-Titel - Jona-David Bastian',
  meta: [
    { name: 'description', content: 'Projekt-Beschreibung' },
    { name: 'keywords', content: 'Technologie-Keywords' },
    { property: 'og:title', content: 'Projekt-Titel' },
    { property: 'og:description', content: 'Projekt-Beschreibung' },
    { property: 'og:image', content: '/assets/img/project-image.jpg' }
  ]
})
```

### 2. Content-Validierung

**Challenge**: Sicherstellen, dass alle Markdown-Dateien die erforderlichen Metadaten haben.

**Lösung**: Zod-Schema-Validierung in der Content-Konfiguration, die zur Build-Zeit validiert wird.

### 3. Performance bei vielen Bildern

**Challenge**: Optimale Ladezeiten trotz vieler hochauflösender Bilder.

**Lösung**: 
- Moderne Bildformate (WebP, AVIF)
- Responsive Images mit verschiedenen Breakpoints
- Lazy Loading Implementation

## Deployment und DevOps

### Deployment-Strategie

Die Website wird auf **Netcup** gehostet mit:
- Automatisches Deployment über Git Hooks
- SSL-Zertifikat von Let's Encrypt
- Gzip-Kompression für bessere Performance

### Monitoring

Ich überwache die Website mit:
- Google Analytics für Nutzerverhalten
- Lighthouse für Performance-Metriken
- Uptime-Monitoring

## Lessons Learned

### Was ich gelernt habe

1. **Nuxt Content** ist unglaublich mächtig für Content-Management
2. **TypeScript** verhindert viele Fehler zur Entwicklungszeit
3. **Schema-Validierung** ist essentiell für Content-Management
4. **Performance-Optimierung** sollte von Anfang an mitgedacht werden

### Was ich anders machen würde

- Früher an die **Bildoptimierung** denken
- Mehr **Unit Tests** für Komponenten schreiben
- **Accessibility** von Anfang an berücksichtigen

## Zukunftspläne

### Geplante Features

- **Newsletter-Integration** für Blog-Updates
- **Kommentarsystem** für Blog-Artikel
- **Search-Funktionalität** für Content
- **Multi-Language Support** (Deutsch/Englisch)

### Technische Verbesserungen

- **Progressive Web App** Features
- **Offline-Funktionalität**
- **Service Worker** für bessere Performance
- **Edge Functions** für dynamische Inhalte

## Fazit

Die Entwicklung dieser Website war ein **spannender Lernprozess**, der mir gezeigt hat, wie modern Webentwicklung funktioniert. Von der Architektur über das Design bis hin zur Performance-Optimierung - jeder Aspekt war eine Herausforderung, die mich als Entwickler weitergebracht hat.

Das Projekt zeigt, dass man mit den richtigen Tools und Technologien **professionelle Webanwendungen** erstellen kann, die sowohl für Nutzer als auch für Entwickler eine Freude sind.

::HighlightBox{title="Open Source"}
Der gesamte Code dieser Website ist auf GitHub verfügbar! Schaue gerne vorbei und lass dich inspirieren oder trage bei.
::

**Technologien im Überblick:**
- Vue.js 3 + Composition API
- Nuxt.js 3 + Server-Side Rendering
- TypeScript für Type Safety
- Tailwind CSS für Styling
- Nuxt Content für Content Management
- Zod für Schema-Validierung
- Nuxt Icon für Icons
- Nuxt Fonts für Schriftarten