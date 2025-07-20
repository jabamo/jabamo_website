import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseStrong from '../../../app/components/content/ProseStrong.vue'

describe('ProseStrong', () => {
  it('renders strong element', async () => {
    // given
    const content = 'Important text'

    // when
    const wrapper = await mountSuspended(ProseStrong, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('strong').exists()).toBe(true)
    expect(wrapper.text()).toContain(content)
  })

  it('applies bold font weight', async () => {
    // given
    const content = 'Bold text'

    // when
    const wrapper = await mountSuspended(ProseStrong, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('strong').classes()).toContain('font-bold')
  })

  it('renders with nested content', async () => {
    // given
    const content = 'Very <em>important</em> text'

    // when
    const wrapper = await mountSuspended(ProseStrong, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('strong').exists()).toBe(true)
    expect(wrapper.html()).toContain('important')
  })
}) 