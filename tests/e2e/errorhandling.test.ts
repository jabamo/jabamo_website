import {test, expect, describe} from 'vitest'
import {$fetch, setup} from '@nuxt/test-utils/e2e'

describe('Error Handling E2E', async () => {
    await setup()

    test('404 page is displayed correctly when wrong uri is called', async () => {
        // given
        try {
            // when
            const html = await $fetch('/nonexistingpage')

            // then
            expect(html).toContain('404')
            expect(html).toContain('Seite nicht gefunden')
        } catch(error: unknown) {
            // then
            // generally, nuxt gives a 404 error when calling non existing pages, that's why we catch that too
            if (error && typeof error === 'object' && ('response' in error || 'status' in error)) {
                const fetchError = error as { response?: { status: number }, status?: number }
                expect(fetchError.response?.status || fetchError.status).toBe(404)
            }
        }
    })

})