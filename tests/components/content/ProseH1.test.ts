import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseH1 from '../../../app/components/content/ProseH1.vue'

describe('ProseH1', () => {
  it('renders h1 element', async () => {
    // given
    const content = 'Main Heading'

    // when
    const wrapper = await mountSuspended(ProseH1, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.text()).toContain(content)
  })

  it('applies title font styling', async () => {
    // given
    const content = 'Styled Heading'

    // when
    const wrapper = await mountSuspended(ProseH1, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('h1').classes()).toContain('font-title')
  })

  it('has responsive text size', async () => {
    // given
    const content = 'Large Heading'

    // when
    const wrapper = await mountSuspended(ProseH1, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('h1').classes()).toContain('text-4xl')
    expect(wrapper.find('h1').classes()).toContain('lg:text-5xl')
  })
}) 