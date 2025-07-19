export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},

    modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/test-utils', '@nuxt/fonts', '@nuxt/icon', '@nuxtjs/color-mode', '@nuxtjs/sitemap', '@nuxtjs/tailwindcss', '@nuxt/test-utils/module'],

    // TailwindCSS config
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
                        secondary: {
                            50: '#f9fafb',
                            900: '#111827',
                        },
                        accent: {
                            500: '#3b82f6',
                            600: '#2563eb',
                        }
                    },
                    fontFamily: {
                        'title': ['Jetbrains Mono', 'monospace'],
                        'content': ['Inter', 'sans-serif'],
                    },
                    typography: {
                        DEFAULT: {
                            css: {
                                '--tw-prose-body': 'rgb(75 85 99)',
                                '--tw-prose-headings': 'rgb(17 24 39)',
                                '--tw-prose-links': 'rgb(59 130 246)',
                                '--tw-prose-code': 'rgb(17 24 39)',
                                '--tw-prose-pre-bg': 'rgb(31 41 55)',
                            }
                        }
                    }
                }
            }
        }
    },

    // color mode config
    colorMode: {
        preference: 'system',
        fallback: 'light',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode',
    },

    // Nuxt Fonts setup
    fonts: {
        defaults: {
            weights: [300, 400, 500, 600, 700],
        },
        provider: 'local',
        families: [
            {
                name: 'Jetbrains Mono',
                provider: 'local',
                weights: [300, 400, 500, 600, 700],
            },
            {
                name: 'Inter',
                provider: 'local',
                weights: [300, 400, 500, 600, 700],
            }
        ]
    },

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

    content: {
        build: {
            markdown: {
                highlight: {
                    theme: {
                        default: 'github-light',
                        dark: 'github-dark',
                        sepia: 'monokai'
                    },
                    langs: ['java', 'kotlin', 'sql', 'javascript', 'typescript', 'python', 'bash', 'json', 'yaml']
                }
            }
        }
    }
})