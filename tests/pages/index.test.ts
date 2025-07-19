import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import IndexPage from '../../app/pages/index.vue'

describe('Index Page', () => {
  it('renders page title correctly', async () => {
    // given
    // when
    const wrapper = await mountSuspended(IndexPage)

    // then
    expect(wrapper.text()).toContain('Werkstudent IT')
    expect(wrapper.text()).toContain('Digital Media Systems')
  })

  it('renders hero section', async () => {
    // given
    // when
    const wrapper = await mountSuspended(IndexPage)

    // then
    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.text()).toContain('Projekte')
  })

  it('has correct SEO meta tags', async () => {
    // given
    // when
    await mountSuspended(IndexPage)

    // then
    expect(document.title).toContain('Jona-David Bastian')
  })
}) 