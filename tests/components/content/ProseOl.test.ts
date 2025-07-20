import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseOl from '../../../app/components/content/ProseOl.vue'

describe('ProseOl', () => {
  it('renders ol element', async () => {
    // given
    const content = '<li>First item</li><li>Second item</li>'

    // when
    const wrapper = await mountSuspended(ProseOl, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('ol').exists()).toBe(true)
    expect(wrapper.html()).toContain('First item')
  })

  it('applies numbered list styling', async () => {
    // given
    const content = '<li>Numbered item</li>'

    // when
    const wrapper = await mountSuspended(ProseOl, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('ol').classes()).toContain('list-decimal')
  })

  it('has proper indentation', async () => {
    // given
    const content = '<li>Indented item</li>'

    // when
    const wrapper = await mountSuspended(ProseOl, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('ol').classes()).toContain('ml-6')
  })
}) 