import {test, expect, describe} from 'vitest'
import {$fetch, setup} from '@nuxt/test-utils/e2e'

describe('Blog Pages E2E', async () => {
    await setup()

    test('blog index loads correctly', async () => {
        // given
        // when
        const html = await $fetch('/blog')

        // then
        expect(html).toContain('Blog')
        expect(html).toContain('Gedanken')
    })

    test('displays blog structure', async () => {
        // given
        // when
        const html = await $fetch('/blog')

        // then
        expect(html).toContain('Alle')
        expect(html).toContain('Erfahrungen')
    })

    test('displays existing articles when available', async () => {
        // given
        // when
        const html = await $fetch('/blog')

        // then
        expect(html).toContain('Digital Media Systems')
        expect(html).toContain('THM')
    })

    test('displays contact information', async () => {
        // given
        // when
        const html = await $fetch('/blog')

        // then
        expect(html).toContain('Webentwicklung')
        expect(html).toContain('Tutorials')
    })

    test('has search functionality', async () => {
        // given
        // when
        const html = await $fetch('/blog')

        // then
        expect(html).toContain('input')
        expect(html).toContain('search')
    })
}) 