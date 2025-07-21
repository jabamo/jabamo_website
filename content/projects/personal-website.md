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

# Meine persönliche Website

::TipBox{title="Projekt-Highlights"}
Die Website, auf der du gerade liest, ist selbst ein Projekt! Ich habe sie entwickelt, weil ich Nuxt kennenlernen wollte und meine Fähigkeiten immer gerne erweitere.
::

## Projektübersicht

Als DMS-Student an der THM wollte ich eine Website erstellen, die nicht nur meine Projekte und Fähigkeiten präsentiert, sondern auch als kleines Showcase dient. Die Herausforderung bestand darin, eine Website zu entwickeln, die sowohl optisch ansprechend als auch technisch fortschrittlich ist.

::ContentSlider{:autoplay="false" :autoplayDelay="4000" size="medium" title="Website-Impressionen" :slides='[{"src": "/assets/img/projects/personal-website/overview_1.png", "alt": "Startseite der Website", "caption": "Die Startseite mit Hero-Section und Projekt-Übersicht"}, {"src": "/assets/img/projects/personal-website/overview_2.png", "alt": "Projekt-Detailansicht", "caption": "Detailansicht eines Projekts mit ContentSlider"}, {"src": "/assets/img/projects/personal-website/navbar.png", "alt": "Navigation der Website", "caption": "Responsive Navigation mit Dark Mode Toggle"}, {"src": "/assets/img/projects/personal-website/portfolio.png", "alt": "Portfolio-Übersicht", "caption": "Portfolio-Seite mit Projekt-Cards und Filtern"}]'}
::

## Technische Architektur

### Das Fundament: Nuxt.js v4

Ich habe mich für **Nuxt.js 4** als Framework entschieden, da es die perfekte Balance zwischen Entwicklerfreundlichkeit und Performance bietet.

Die wichtigsten Konfigurationen in der `nuxt.config.ts`, unter anderem die Module, die App-Config sowie die Konfiguration von TailwindCSS.

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
})
```

In der App-Config kann neben einer Standard-SEO-Config auch eingestellt werden, dass es Transitions zwischen dem Wechsel von Seiten gibt.
```typescript
app: {
    head: {
        title: 'Jona-David Bastian - Student & Developer',
            htmlAttrs: {
            lang: 'de',
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},

            // description
            {name: 'description', content: 'Student & angehender Developer mit Fokus auf Backend-Entwicklung. Hier findest du mein Portfolio mit Projekten und Blog.'},

            // seo tags
            {name: 'robots', content: 'index, follow'},
            {
                name: 'keywords',
                content: 'jona, david, bastian, informatik, fullstack, backend, java, spring, developer, student, thm, dms'
            },
        ],
            link: [
            {
                rel: 'icon',
                type: 'image/svg+xml',
                href: '/favicon.svg',
            },
        ],
    },
    pageTransition: {name: 'page', mode: 'out-in'},
},
```

Das zugehörige CSS dazu in der app.vue:
```css
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  filter: blur(5px);
}
```

### Content Management mit Nuxt Content

Einer der besten Aspekte der Website ist das headless **Content Management System** basierend auf Nuxt Content. Dafür habe ich eine Config erstellt, die sowohl Blog-Artikel als auch Projekte verwaltet:

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
Durch die Zod-Schema-Validierung wird sichergestellt, dass alle Blog-Artikel und Projekte die erforderlichen Felder haben. Das verhindert vor allem Runtime-Fehler und macht die Content-Erstellung konsistent.
::

## Design-System und Styling

### Tailwind CSS als Foundation

Ich habe ein **einheitliches Design** entwickelt, das auf TailwindCSS basiert. Das System umfasst:

- **Farbpalette**: Durchdachte Primary-, Secondary- und Accent-Farben
- **Typography**: Jetbrains Mono für Headlines, Inter für Content
- **Spacing**: Konsistente Abstände und Layouts
- **Components**: Wiederverwendbare UI-Komponenten

### Optimiertes Font-Rendering mit @nuxt/fonts

Für das Font-Management verwende ich das **@nuxt/fonts** Modul, das mir erhebliche Performance-Vorteile bringt:

**Warum ich @nuxt/fonts gewählt habe:**
- **Lokale Font-Verwaltung**: Alle Schriftarten werden lokal gehostet, was sowohl die Performance verbessert als auch DSGVO-konform ist
- **Automatische Optimierung**: Das Modul kümmert sich um die korrekte Einbindung der Font-Dateien in verschiedenen Formaten (WOFF2, WOFF)
- **Intelligente Fallbacks**: Falls Schriftarten nicht geladen werden können, greift das System auf lokale System-Schriftarten zurück
- **Build-Time Optimierung**: Font-Pfade werden zur Build-Zeit aufgelöst und optimiert

```typescript
// Automatische Konfiguration in nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts', 
  ],
})
```

In meiner `tailwind.config` definiere ich dann die Font-Familien:

```typescript
theme: {
  extend: {
    fontFamily: {
      'title': ['JetBrains Mono', 'monospace'],
      'content': ['Inter', 'sans-serif'],
    }
  }
}
```

Das Ergebnis: **Bessere Core Web Vitals** durch optimiertes Font-Rendering und keine störenden Layout-Shifts beim Laden der Seite.

### Dark Mode Implementation

Die Dark Mode-Funktionalität war mir besonders wichtig (wobei ich persönlich am liebsten den Dark-Mode nutze ;)). Nuxt liefert dafür ein eigenes Modul `@nuxtjs/color-mode`:

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

Das System erkennt automatisch die Präferenz des Benutzers und speichert sie lokal. In der `app.vue` habe ich darüber hinaus dann auch Transitions zwischen den Farbmodi implementiert:

```vue App.vue
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
```

## Custom Prose-Komponenten

Ein weiteres besonderes Feature sind die **Custom Prose-Komponenten**, die ich für Nuxt Content geschrieben habe. Das Ganze ermöglicht es mir dann, Markdown-Inhalte mit interaktiven und zum Design passenden Elementen zu erweitern:

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

- **ContentSlider**: Für Bildergalerien mit Autoplay und Navigation (nutzt Swiper.js als Library)
- **TipBox**: Für Hinweise und wichtige Informationen
- **HighlightBox**: Für besondere Hervorhebungen
- **ProseA**: Für schön gestylte Links mit Icons

## Performance-Optimierungen

### Server-Side Rendering

Durch Nuxt.js' **Server-Side Rendering** erreiche ich:
- Schnelle First Contentful Paint (FCP), also sehr schnelles Rendering des ersten DOM-Elements
- Bessere SEO-Performance
- Gute Core Web Vitals

### Code Splitting

Nuxt.js splittet automatisch den Code in kleinere Chunks:
- Jede Seite lädt nur den benötigten Code
- Lazy Loading der Komponenten
- Optimal für Performance

### Code-Qualität

Ich nutze das `@nuxt/eslint` Modul für:
- **Konsistenten Code-Stil**: Automatische Formatierung und Einheitlichkeit im gesamten Projekt
- **Fehlerprävention**: Frühzeitiges Erkennen von TypeScript-Fehlern und potenziellen Bugs
- **Vue.js Best Practices**: Spezielle Regeln für Vue-Komponenten und Composition API
- **Performance-Optimierung**: Warnungen bei nicht genutzten Variablen, `any`-Verwendungen usw.

Die ESLint-Konfiguration läuft automatisch beim Entwickeln und vor jedem Commit, wodurch die Code-Qualität durchgehend gut bleibt. Besonders hilfreich sind die Vue-spezifischen Regeln, die dabei helfen, die Komponenten-Architektur sauber zu halten und häufige Fehlerquellen zu vermeiden.

```typescript
// Beispiel einer automatisch erkannten Verbesserung
interface Props {
    title: string
    alt?: string
}

// Vorher: ungenutzte Variable
const props = withDefaults(defineProps<Props>(), {
    alt: 'Platzhalter'
})

// Nachher: const props wird in dem Fall nicht benötigt, da Vue das automatisch handlet
withDefaults(defineProps<Props>(), {
    alt: 'Platzhalter'
})
```

## Technische Herausforderungen

### 1. SEO-Optimierung

::TipBox{title="SEO Challenge"}
Dynamische Inhalte SEO-freundlich zu gestalten ist mir als DMS-Student, der bereits auch mit SEO einiges an Erfahrung gesammelt hat, sehr wichtig.
::

**Lösung**: Ich habe für jede Seite individuelle Meta-Tags implementiert, die in Content-Inhalten dynamisch die Tags setzen.
Nuxt bietet dafür mit useHead eine sehr einfache Möglichkeit an:

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

## Deployment und DevOps

### Deployment-Strategie

Die Website wird auf **Netcup** gehostet mit:
- Automatisches Deployment über Git CI/CD
- SSL-Zertifikat von Let's Encrypt
- Gzip-Kompression für bessere Performance

## Lessons Learned

### Was ich gelernt habe

1. **Nuxt Content** ist unglaublich mächtig für Content-Management
2. **TypeScript** verhindert viele Fehler zur Entwicklungszeit
3. **Schema-Validierung** ist essentiell für Content-Management
4. **Performance-Optimierung** sollte von Anfang an mitgedacht werden

### Was ich anders machen würde

- Noch mehr die Dokumentation lesen, um mir Fehler zu ersparen, die mich Zeit gekostet haben ;)

## Zukunftspläne

### Geplante Features

- **Micro-Backend** zum Verwalten der Seite
- **CMS-Verwaltung** zum einfacheren Erstellen von Artikeln
- Für weitere **Vorschläge** bin ich offen!

## Fazit

Die Entwicklung dieser Website war ein **Lernprozess**, der mir gezeigt hat, wie viel Nuxt kann und wie viel Spaß es macht, mit diesem Framework zu arbeiten.
Jeder Aspekt war für mich sehr interessant und ich habe eine ganze Menge über Nuxt und einige der Module gelernt!

Das Projekt zeigt meiner Meinung nach, dass man mit den richtigen Frameworks **professionelle Webanwendungen** erstellen kann, die sowohl für Nutzer als auch für Entwickler eine Freude sind. Für mich war es das zumindest! :)

::HighlightBox{title="Open Source"}
Der gesamte Code dieser Website ist übrigens auf [Github](https://github.com/jabamo/jabamo_website) verfügbar! Schaue gerne vorbei und lass dich inspirieren oder schlage mir Änderungen vor.
::

**Technologien im Überblick:**
- Vue.js 3 + Composition API
- Nuxt.js 4 + Server-Side Rendering
- TypeScript für Type Safety
- Tailwind CSS für Styling
- Nuxt Content für Content Management
- Zod für Schema-Validierung
- Nuxt Icon für Icons (Tabler Icons)
- Nuxt Fonts für Schriftarten