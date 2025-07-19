import {test, expect, describe} from 'vitest'
import {$fetch, setup} from '@nuxt/test-utils/e2e'

describe('Performance E2E', async () => {
    await setup()

    test('pages load within reasonable time', async () => {
        // given
        const pages = ['/', '/about', '/blog', '/projects']

        // when & then
        for (const page of pages) {
            const startTime = Date.now()
            const html = await $fetch(page) as string
            const endTime = Date.now()

            expect(html).toBeTruthy()
            expect(endTime - startTime).toBeLessThan(10000)
        }
    })

    test('pages have reasonable content size', async () => {
        // given
        const pages = ['/', '/about', '/blog', '/projects']

        // when & then
        for (const page of pages) {
            const html = await $fetch(page) as string
            expect(html.length).toBeGreaterThan(500)
            expect(html.length).toBeLessThan(1000000)
        }
    })

    test('CSS and JS resources are present', async () => {
        // given
        // when
        const html = await $fetch('/') as string

        // then
        const cssLinks = html.match(/<link[^>]+\.css[^>]*>/g) || []
        const jsScripts = html.match(/<script[^>]+>/g) || []

        expect(cssLinks.length).toBeGreaterThan(0)
        expect(jsScripts.length).toBeGreaterThan(0)
    })
}) 