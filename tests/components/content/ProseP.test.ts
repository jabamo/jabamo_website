import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseP from '../../../app/components/content/ProseP.vue'

describe('ProseP', () => {
  it('renders p element', async () => {
    // given
    const content = 'This is a paragraph'

    // when
    const wrapper = await mountSuspended(ProseP, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('p').exists()).toBe(true)
    expect(wrapper.text()).toContain(content)
  })

  it('applies content font styling', async () => {
    // given
    const content = 'Content paragraph'

    // when
    const wrapper = await mountSuspended(ProseP, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('p').classes()).toContain('font-content')
  })

  it('has proper line height', async () => {
    // given
    const content = 'Paragraph with good readability'

    // when
    const wrapper = await mountSuspended(ProseP, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('p').classes()).toContain('leading-relaxed')
  })
}) 