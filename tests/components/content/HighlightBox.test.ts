import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HighlightBox from '../../../app/components/content/HighlightBox.vue'

describe('HighlightBox', () => {
  it('renders with required title prop', async () => {
    // given
    const title = 'Important Highlight'
    const content = 'Highlighted content'

    // when
    const wrapper = await mountSuspended(HighlightBox, {
      props: { title },
      slots: { default: content }
    })

    // then
    expect(wrapper.text()).toContain('Important Highlight')
    expect(wrapper.text()).toContain('Highlighted content')
    expect(wrapper.find('.flex.items-center').exists()).toBe(true)
  })

  it('renders slot content correctly', async () => {
    // given
    const title = 'Test Highlight'
    const slotContent = 'This content should be highlighted for attention.'

    // when
    const wrapper = await mountSuspended(HighlightBox, {
      props: { title },
      slots: { default: slotContent }
    })

    // then
    expect(wrapper.text()).toContain(slotContent)
  })

  it('has correct styling for highlight appearance', async () => {
    // given
    const title = 'Styled Highlight'

    // when
    const wrapper = await mountSuspended(HighlightBox, {
      props: { title },
      slots: { default: 'Content' }
    })

    // then
    expect(wrapper.find('.bg-gradient-to-r').exists()).toBe(true)
    expect(wrapper.find('.from-yellow-50').exists()).toBe(true)
    expect(wrapper.find('.border-yellow-200').exists()).toBe(true)
    expect(wrapper.find('.text-yellow-700').exists()).toBe(true)
  })
}) 