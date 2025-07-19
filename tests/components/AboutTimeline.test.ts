import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AboutTimeline from '../../app/components/AboutTimeline.vue'

describe('AboutTimeline', () => {
  it('renders timeline component', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutTimeline)

    // then
    expect(wrapper.find('section').exists()).toBe(true)
  })

  it('renders timeline items', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutTimeline)

    // then
    expect(wrapper.find('.space-y-16').exists()).toBe(true)
  })

  it('contains education and career content', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutTimeline)

    // then
    expect(wrapper.text()).toContain('Werdegang')
  })

  it('has proper timeline structure', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutTimeline)

    // then
    expect(wrapper.find('h2').exists()).toBe(true)
  })

  it('renders timeline with progress line', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutTimeline)

    // then
    expect(wrapper.find('.bg-accent-500').exists()).toBe(true)
  })

  it('contains visual timeline elements', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutTimeline)

    // then
    expect(wrapper.find('.rounded-full').exists()).toBe(true)
  })
}) 