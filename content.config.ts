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