import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseBlockquote from '../../../app/components/content/ProseBlockquote.vue'

describe('ProseBlockquote', () => {
  it('renders blockquote element', async () => {
    // given
    const content = 'This is a quote'

    // when
    const wrapper = await mountSuspended(ProseBlockquote, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('blockquote').exists()).toBe(true)
    expect(wrapper.text()).toContain(content)
  })

  it('applies correct border styling', async () => {
    // given
    const content = 'Styled quote'

    // when
    const wrapper = await mountSuspended(ProseBlockquote, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('blockquote').classes()).toContain('border-l-4')
  })

  it('renders with accent styling', async () => {
    // given
    const content = 'Quote with accent'

    // when
    const wrapper = await mountSuspended(ProseBlockquote, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('.border-accent-500').exists()).toBe(true)
  })
}) 