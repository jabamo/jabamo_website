import {test, expect, describe} from 'vitest'
import {$fetch, setup} from '@nuxt/test-utils/e2e'

describe('Legal Pages E2E', async () => {
    await setup()

    test('imprint page loads correctly', async () => {
        // given
        // when
        const html = await $fetch('/legal/imprint')

        // then
        expect(html).toContain('Impressum')
    })

    test('imprint contains required information', async () => {
        // given
        // when
        const html = await $fetch('/legal/imprint')

        // then
        expect(html).toContain('Jona')
        expect(html).toContain('Kontakt')
    })

    test('privacy policy page loads correctly', async () => {
        // given
        // when
        const html = await $fetch('/legal/privacy-policy')

        // then
        expect(html).toContain('Datenschutz')
        expect(html).toContain('Daten')
    })

    test('privacy policy contains required information', async () => {
        // given
        // when
        const html = await $fetch('/legal/privacy-policy')

        // then
        expect(html).toContain('Verarbeitung')
        expect(html).toContain('Cookies')
    })

    test('legal pages are accessible', async () => {
        // given
        const legalPages = ['/legal/imprint', '/legal/privacy-policy']

        // when & then
        for (const page of legalPages) {
            const html = await $fetch(page) as string
            expect(html.length).toBeGreaterThan(1000)
            expect(html).toContain('<!DOCTYPE html>')
        }
    })
}) 