import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AboutPage from '../../app/pages/about.vue'

describe('About Page', () => {
  it('renders about page content', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutPage)

    // then
    expect(wrapper.text()).toContain('Über mich')
  })

  it('renders timeline section', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutPage)

    // then
    expect(wrapper.find('h2').exists()).toBe(true)
  })

  it('renders skills section', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutPage)

    // then
    expect(wrapper.text()).toContain('Skills')
  })

  it('has correct page structure', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutPage)

    // then
    expect(wrapper.find('section').exists()).toBe(true)
  })

  it('renders personal interests section', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AboutPage)

    // then
    expect(wrapper.text()).toContain('programmiere')
  })
}) 