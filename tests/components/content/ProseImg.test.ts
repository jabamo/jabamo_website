import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseImg from '../../../app/components/content/ProseImg.vue'

describe('ProseImg', () => {
  it('renders image with src and alt attributes', async () => {
    // given
    const src = '/test-image.jpg'
    const alt = 'Test image alt text'

    // when
    const wrapper = await mountSuspended(ProseImg, {
      attrs: { src, alt }
    })

    // then
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(src)
    expect(wrapper.find('img').attributes('alt')).toBe(alt)
  })

  it('renders caption when provided', async () => {
    // given
    const src = '/test-image.jpg'
    const alt = 'Test image'
    const caption = 'This is a test caption'

    // when
    const wrapper = await mountSuspended(ProseImg, {
      attrs: { src, alt, caption }
    })

    // then
    expect(wrapper.text()).toContain(caption)
    expect(wrapper.find('.flex.items-center').exists()).toBe(true)
  })

  it('has proper figure structure', async () => {
    // given
    const src = '/test-image.jpg'
    const alt = 'Test image'

    // when
    const wrapper = await mountSuspended(ProseImg, {
      attrs: { src, alt }
    })

    // then
    expect(wrapper.find('figure').exists()).toBe(true)
  })

  it('applies rounded styling', async () => {
    // given
    const src = '/test-image.jpg'
    const alt = 'Test image'

    // when
    const wrapper = await mountSuspended(ProseImg, {
      attrs: { src, alt }
    })

    // then
    expect(wrapper.find('.rounded-xl').exists()).toBe(true)
  })

  it('has hover effects', async () => {
    // given
    const src = '/test-image.jpg'
    const alt = 'Test image'

    // when
    const wrapper = await mountSuspended(ProseImg, {
      attrs: { src, alt }
    })

    // then
    expect(wrapper.find('.group').exists()).toBe(true)
  })

  it('renders not-prose container', async () => {
    // given
    const src = '/test-image.jpg'
    const alt = 'Test image'

    // when
    const wrapper = await mountSuspended(ProseImg, {
      attrs: { src, alt }
    })

    // then
    expect(wrapper.find('.not-prose').exists()).toBe(true)
  })
}) 