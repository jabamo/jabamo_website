import {test, expect, describe} from 'vitest'
import {$fetch, setup} from '@nuxt/test-utils/e2e'

describe('Homepage E2E', async () => {
    await setup()

    test('loads and displays main content', async () => {
        // given
        // when
        const html = await $fetch('/')

        // then
        expect(html).toContain('Werkstudent IT')
        expect(html).toContain('Digital Media Systems')
    })

    test('displays navigation links', async () => {
        // given
        // when
        const html = await $fetch('/')

        // then
        expect(html).toContain('Über mich')
        expect(html).toContain('Projekte')
        expect(html).toContain('Blog')
    })

    test('displays hero section', async () => {
        // given
        // when
        const html = await $fetch('/')

        // then
        expect(html).toContain('Meine Projekte')
        expect(html).toContain('Meine Erfahrungen')
    })

    test('displays social links', async () => {
        // given
        // when
        const html = await $fetch('/')

        // then
        expect(html).toContain('GitHub')
        expect(html).toContain('LinkedIn')
    })

    test('displays footer with legal links', async () => {
        // given
        // when
        const html = await $fetch('/')

        // then
        expect(html).toContain('Impressum')
        expect(html).toContain('Datenschutz')
        expect(html).toContain('2025')
    })
}) 