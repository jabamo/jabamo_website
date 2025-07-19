import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SocialLinks from '../../app/components/SocialLinks.vue'

describe('SocialLinks', () => {
  it('renders social links section', async () => {
    // given
    // when
    const wrapper = await mountSuspended(SocialLinks)

    // then
    expect(wrapper.find('section').exists()).toBe(true)
  })

  it('renders GitHub link', async () => {
    // given
    // when
    const wrapper = await mountSuspended(SocialLinks)

    // then
    expect(wrapper.find('a[href*="github"]').exists()).toBe(true)
  })

  it('renders LinkedIn link', async () => {
    // given
    // when
    const wrapper = await mountSuspended(SocialLinks)

    // then
    expect(wrapper.find('a[href*="linkedin"]').exists()).toBe(true)
  })

  it('renders email link', async () => {
    // given
    // when
    const wrapper = await mountSuspended(SocialLinks)

    // then
    expect(wrapper.find('a[href^="mailto:"]').exists()).toBe(true)
  })

  it('renders section title', async () => {
    // given
    // when
    const wrapper = await mountSuspended(SocialLinks)

    // then
    expect(wrapper.text()).toContain('Lass uns vernetzen')
  })

  it('has proper ARIA labels', async () => {
    // given
    // when
    const wrapper = await mountSuspended(SocialLinks)

    // then
    expect(wrapper.find('a[aria-label]').exists()).toBe(true)
  })
}) 