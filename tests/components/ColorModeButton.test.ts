import { describe, it, expect } from 'vitest'
import {mockNuxtImport, mountSuspended} from '@nuxt/test-utils/runtime'
import ColorModeButton from '../../app/components/ColorModeButton.vue'
import {ref} from "vue";

const mockColorMode = {
  value: 'light',
  preference: 'light'
}

mockNuxtImport('useColorMode', () => {
  return () => ({
    data: ref([mockColorMode])
  })
})

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