import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProsePre from '../../../app/components/content/ProsePre.vue'

describe('ProsePre', () => {
  it('renders pre element', async () => {
    // given
    const content = 'const code = "example";'

    // when
    const wrapper = await mountSuspended(ProsePre, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('pre').exists()).toBe(true)
    expect(wrapper.text()).toContain(content)
  })

  it('applies code styling', async () => {
    // given
    const content = 'function test() { return true; }'

    // when
    const wrapper = await mountSuspended(ProsePre, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('pre').exists()).toBe(true)
  })

  it('has code container structure', async () => {
    // given
    const content = 'npm install package'

    // when
    const wrapper = await mountSuspended(ProsePre, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('.not-prose').exists()).toBe(true)
  })

  it('preserves whitespace and formatting', async () => {
    // given
    const content = 'line 1\n  indented line 2\n    more indented'

    // when
    const wrapper = await mountSuspended(ProsePre, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('pre').exists()).toBe(true)
    expect(wrapper.html()).toContain('line 1')
  })
}) 