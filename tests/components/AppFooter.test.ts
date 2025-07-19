import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppFooter from '../../app/components/AppFooter.vue'

describe('AppFooter', () => {
  it('renders footer element', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppFooter)

    // then
    expect(wrapper.find('footer').exists()).toBe(true)
  })

  it('renders copyright information', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppFooter)

    // then
    expect(wrapper.text()).toContain('2025')
    expect(wrapper.text()).toContain('Jona')
  })

  it('renders legal links', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppFooter)

    // then
    expect(wrapper.text()).toContain('Impressum')
    expect(wrapper.text()).toContain('Datenschutz')
  })

  it('has proper link structure', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppFooter)

    // then
    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('renders with proper styling', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppFooter)

    // then
    expect(wrapper.find('footer').classes()).toContain('bg-white')
  })
}) 