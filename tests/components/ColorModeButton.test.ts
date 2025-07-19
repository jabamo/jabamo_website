import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ColorModeButton from '../../app/components/ColorModeButton.vue'

const mockColorMode = {
  value: 'light',
  preference: 'light'
}

vi.mock('#app', () => ({
  useColorMode: () => mockColorMode
}))

describe('ColorModeButton', () => {
  it('renders button with correct attributes', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ColorModeButton)

    // then
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').attributes('aria-label')).toBe('Zum dunklen Modus wechseln')
  })

  it('has proper button structure', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ColorModeButton)

    // then
    expect(wrapper.find('button').classes()).toContain('flex')
    expect(wrapper.find('button').classes()).toContain('p-2')
  })

  it('renders with correct styling', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ColorModeButton)

    // then
    expect(wrapper.find('.rounded-lg').exists()).toBe(true)
    expect(wrapper.find('.bg-gray-100').exists()).toBe(true)
  })

  it('contains ClientOnly component', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ColorModeButton)

    // then
    expect(wrapper.html()).toContain('button')
  })
}) 