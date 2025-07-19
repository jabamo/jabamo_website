import {test, expect, describe} from 'vitest'
import {$fetch, setup} from '@nuxt/test-utils/e2e'

describe('Projects Pages E2E', async () => {
    await setup()

    test('projects index loads correctly', async () => {
        // given
        // when
        const html = await $fetch('/projects')

        // then
        expect(html).toContain('Projekte')
        expect(html).toContain('Sammlung')
    })

    test('displays projects structure', async () => {
        // given
        // when
        const html = await $fetch('/projects')

        // then
        expect(html).toContain('Alle')
        expect(html).toContain('Frontend')
    })

    test('displays projects properly when loaded', async () => {
        // given
        // when
        const html = await $fetch('/projects')

        // then
        expect(html).toContain('Persönliche Website')
        expect(html).toContain('Webentwicklung')
    })

    test('displays collaboration section', async () => {
        // given
        // when
        const html = await $fetch('/projects')

        // then
        expect(html).toContain('Backend')
        expect(html).toContain('APIs')
    })

    test('has proper project structure', async () => {
        // given
        // when
        const html = await $fetch('/projects')

        // then
        expect(html).toContain('Studium')
        expect(html).toContain('Praktika')
    })
}) 