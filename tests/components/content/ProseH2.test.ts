import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseH2 from '../../../app/components/content/ProseH2.vue'

describe('ProseH2', () => {
  it('renders h2 element', async () => {
    // given
    const content = 'Section Heading'

    // when
    const wrapper = await mountSuspended(ProseH2, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.text()).toContain(content)
  })

  it('applies title font styling', async () => {
    // given
    const content = 'Styled H2'

    // when
    const wrapper = await mountSuspended(ProseH2, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('h2').classes()).toContain('font-title')
  })

  it('has medium text size', async () => {
    // given
    const content = 'Medium Heading'

    // when
    const wrapper = await mountSuspended(ProseH2, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('h2').classes()).toContain('text-3xl')
  })
}) 