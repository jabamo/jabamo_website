import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseH3 from '../../../app/components/content/ProseH3.vue'

describe('ProseH3', () => {
  it('renders h3 element', async () => {
    // given
    const content = 'Subsection Heading'

    // when
    const wrapper = await mountSuspended(ProseH3, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('h3').exists()).toBe(true)
    expect(wrapper.text()).toContain(content)
  })

  it('applies title font styling', async () => {
    // given
    const content = 'Styled H3'

    // when
    const wrapper = await mountSuspended(ProseH3, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('h3').classes()).toContain('font-title')
  })

  it('has smaller text size', async () => {
    // given
    const content = 'Small Heading'

    // when
    const wrapper = await mountSuspended(ProseH3, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('h3').classes()).toContain('text-2xl')
  })
}) 