import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseCode from '../../../app/components/content/ProseCode.vue'

describe('ProseCode', () => {
  it('renders code element', async () => {
    // given
    const content = 'const test = true'

    // when
    const wrapper = await mountSuspended(ProseCode, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('code').exists()).toBe(true)
    expect(wrapper.text()).toContain(content)
  })

  it('applies monospace font styling', async () => {
    // given
    const content = 'function test() {}'

    // when
    const wrapper = await mountSuspended(ProseCode, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('code').classes()).toContain('font-title')
  })

  it('renders with background styling', async () => {
    // given
    const content = 'npm install'

    // when
    const wrapper = await mountSuspended(ProseCode, {
      slots: { default: () => content }
    })

    // then
    expect(wrapper.find('code').exists()).toBe(true)
    expect(wrapper.html()).toContain('bg-gray')
  })
}) 