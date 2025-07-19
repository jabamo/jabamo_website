import {test, expect, describe} from 'vitest'
import {$fetch, setup} from '@nuxt/test-utils/e2e'

describe('Navigation E2E', async () => {
    await setup()

    test('all main pages are accessible', async () => {
        // given
        const pages = ['/', '/about', '/blog', '/projects', '/legal/imprint', '/legal/privacy-policy']

        // when & then
        for (const page of pages) {
            const html = await $fetch(page) as string
            expect(html).toBeTruthy()
            expect(html.length).toBeGreaterThan(100)
        }
    })

    test('navigation links are present on all pages', async () => {
        // given
        const mainPages = ['/', '/about', '/blog', '/projects']

        // when & then
        for (const page of mainPages) {
            const html = await $fetch(page) as string
            expect(html).toContain('Über')
            expect(html).toContain('Projekte')
            expect(html).toContain('Blog')
        }
    })

    test('footer is present on all pages', async () => {
        // given
        const allPages = ['/', '/about', '/blog', '/projects']

        // when & then
        for (const page of allPages) {
            const html = await $fetch(page) as string
            expect(html).toContain('2025')
            expect(html).toContain('Jona')
        }
    })

    test('pages have proper HTML structure', async () => {
        // given
        const pages = ['/', '/about', '/blog', '/projects']

        // when & then
        for (const page of pages) {
            const html = await $fetch(page) as string
            expect(html).toContain('<!DOCTYPE html>')
            expect(html).toContain('<head>')
            expect(html).toContain('<body>')
        }
    })

    test('color mode button is present', async () => {
        // given
        // when
        const html = await $fetch('/') as string

        // then
        expect(html).toContain('Modus wechseln')
    })
}) 