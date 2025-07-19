import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseUl from '../../../app/components/content/ProseUl.vue'

describe('ProseUl', () => {
  it('renders ul element', async () => {
    // given
    const content = '<li>First item</li><li>Second item</li>'

    // when
    const wrapper = await mountSuspended(ProseUl, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('ul').exists()).toBe(true)
    expect(wrapper.html()).toContain('First item')
  })

  it('applies spacing styling', async () => {
    // given
    const content = '<li>Spaced item</li>'

    // when
    const wrapper = await mountSuspended(ProseUl, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('ul').classes()).toContain('space-y-3')
  })

  it('has proper indentation', async () => {
    // given
    const content = '<li>Indented item</li>'

    // when
    const wrapper = await mountSuspended(ProseUl, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('ul').classes()).toContain('ml-6')
  })
}) 