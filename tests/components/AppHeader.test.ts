import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppHeader from '../../app/components/AppHeader.vue'

describe('AppHeader', () => {
  it('renders header element', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppHeader)

    // then
    expect(wrapper.find('header').exists()).toBe(true)
  })

  it('renders navigation links', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppHeader)

    // then
    expect(wrapper.text()).toContain('Blog')
    expect(wrapper.text()).toContain('Projekte')
  })

  it('renders home link', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppHeader)

    // then
    expect(wrapper.text()).toContain('Home')
  })

  it('has navigation structure', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppHeader)

    // then
    expect(wrapper.find('nav').exists()).toBe(true)
  })

  it('contains color mode button', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppHeader)

    // then
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('renders with fixed positioning', async () => {
    // given
    // when
    const wrapper = await mountSuspended(AppHeader)

    // then
    expect(wrapper.find('header').classes()).toContain('fixed')
  })
}) 