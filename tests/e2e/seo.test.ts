import {test, expect, describe} from 'vitest'
import {$fetch, setup} from '@nuxt/test-utils/e2e'

describe('SEO E2E', async () => {
    await setup()

    test('homepage has proper SEO meta tags', async () => {
        // given
        // when
        const html = await $fetch('/') as string

        // then
        expect(html).toContain('<title>')
        expect(html).toContain('meta name="description"')
        expect(html).toContain('meta name="viewport"')
    })

    test('all pages have unique titles', async () => {
        // given
        const pages = ['/', '/about', '/blog', '/projects']
        const titles: string[] = []

        // when
        for (const page of pages) {
            const html = await $fetch(page) as string
            const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/)
            if (titleMatch) {
                titles.push(titleMatch[1])
            }
        }

        // then
        const uniqueTitles = new Set(titles)
        expect(uniqueTitles.size).toBe(titles.length)
    })

    test('pages have proper heading structure', async () => {
        // given
        const pages = ['/', '/about', '/blog', '/projects']

        // when & then
        for (const page of pages) {
            const html = await $fetch(page) as string
            expect(html).toContain('<h1')
        }
    })

    test('images have alt attributes', async () => {
        // given
        // when
        const html = await $fetch('/') as string

        // then
        const imgTags = html.match(/<img[^>]+>/g) || []
        for (const img of imgTags) {
            expect(img).toContain('alt=')
        }
    })
}) 