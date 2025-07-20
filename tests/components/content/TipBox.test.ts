import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import TipBox from '../../../app/components/content/TipBox.vue'

describe('TipBox', () => {
  it('renders with default title', async () => {
    // given
    const content = 'Test tip content'

    // when
    const wrapper = await mountSuspended(TipBox, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.text()).toContain('Tipp')
    expect(wrapper.text()).toContain('Test tip content')
    expect(wrapper.find('.flex.items-center').exists()).toBe(true)
  })

  it('renders with custom title', async () => {
    // given
    const customTitle = 'Custom Tip Title'
    const content = 'Test tip content'

    // when
    const wrapper = await mountSuspended(TipBox, {
      props: { title: customTitle },
      slots: { default: () => content }
    })

    // then
    expect(wrapper.text()).toContain(customTitle)
    expect(wrapper.text()).toContain('Test tip content')
  })

  it('renders slot content correctly', async () => {
    // given
    const slotContent = 'This is important information to remember.'

    // when
    const wrapper = await mountSuspended(TipBox, {
      slots: { default: () => slotContent }
    })

    // then
    expect(wrapper.text()).toContain(slotContent)
  })

  it('has correct styling classes', async () => {
    // given
    // when
    const wrapper = await mountSuspended(TipBox, {
      slots: { default: () => 'Content' }
    })

    // then
    expect(wrapper.find('.bg-gradient-to-r').exists()).toBe(true)
    expect(wrapper.find('.from-blue-50').exists()).toBe(true)
    expect(wrapper.find('.border-blue-200').exists()).toBe(true)
  })
}) 