import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},

    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/test-utils',
        '@nuxt/fonts',
        '@nuxt/icon'
    ],

    //import tailwindCSS
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    css: ['~/assets/css/main.css'],

    app: {
        head: {
            title: 'Startseite',
            htmlAttrs: {
                lang: 'de',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

                // description
                { name: 'description', content: 'Beschreibung hier rein' },

                // seo tags
                { name: 'robots', content: 'index, follow' },
                { name: 'keywords', content: 'jona, david, bastian, informatik, fullstack, backend, java, spring, developer, student, thm, dms' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        }
    }
})