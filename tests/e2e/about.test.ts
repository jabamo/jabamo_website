import {test, expect, describe} from 'vitest'
import {$fetch, setup} from '@nuxt/test-utils/e2e'

describe('About Page E2E', async () => {
    await setup()

    test('loads and displays main content', async () => {
        // given
        // when
        const html = await $fetch('/about')

        // then
        expect(html).toContain('Über mich')
    })

    test('displays skills section', async () => {
        // given
        // when
        const html = await $fetch('/about')

        // then
        expect(html).toContain('Frontend')
        expect(html).toContain('Backend')
    })

    test('displays technologies', async () => {
        // given
        // when
        const html = await $fetch('/about')

        // then
        expect(html).toContain('Vue.js')
        expect(html).toContain('TypeScript')
    })
}) 