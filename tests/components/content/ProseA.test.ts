import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseA from '../../../app/components/content/ProseA.vue'

describe('ProseA', () => {
  it('renders basic link with href', async () => {
    // given
    const href = 'https://example.com'
    const content = 'Test Link'

    // when
    const wrapper = await mountSuspended(ProseA, {
      attrs: { href },
      slots: { default: content }
    })

    // then
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').attributes('href')).toBe(href)
    expect(wrapper.text()).toContain(content)
  })

  it('renders external link with correct attributes', async () => {
    // given
    const href = 'https://external.com'
    const content = 'External Link'

    // when
    const wrapper = await mountSuspended(ProseA, {
      attrs: { href },
      slots: { default: content }
    })

    // then
    const link = wrapper.find('a')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })

  it('renders internal link without external attributes', async () => {
    // given
    const href = '/internal-page'
    const content = 'Internal Link'

    // when
    const wrapper = await mountSuspended(ProseA, {
      attrs: { href },
      slots: { default: content }
    })

    // then
    const link = wrapper.find('a')
    expect(link.attributes('target')).toBeUndefined()
    expect(link.attributes('rel')).toBeUndefined()
  })

  it('renders with button variant', async () => {
    // given
    const href = 'https://example.com'
    const content = 'Button Link'
    const variant = 'button'

    // when
    const wrapper = await mountSuspended(ProseA, {
      attrs: { href, variant },
      slots: { default: content }
    })

    // then
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.html()).toContain('px-3 py-2')
  })

  it('renders with underline variant', async () => {
    // given
    const href = 'https://example.com'
    const content = 'Underline Link'
    const variant = 'underline'

    // when
    const wrapper = await mountSuspended(ProseA, {
      attrs: { href, variant },
      slots: { default: content }
    })

    // then
    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('renders custom icon when provided', async () => {
    // given
    const href = 'https://example.com'
    const content = 'Icon Link'
    const icon = 'tabler:home'

    // when
    const wrapper = await mountSuspended(ProseA, {
      attrs: { href, icon },
      slots: { default: content }
    })

    // then
    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('hides icon when hideIcon is true', async () => {
    // given
    const href = 'https://example.com'
    const content = 'No Icon Link'
    const hideIcon = true

    // when
    const wrapper = await mountSuspended(ProseA, {
      attrs: { href, hideIcon },
      slots: { default: content }
    })

    // then
    expect(wrapper.find('svg').exists()).toBe(false)
  })

  it('renders with different color variants', async () => {
    // given
    const href = 'https://example.com'
    const content = 'Green Link'
    const color = 'green'

    // when
    const wrapper = await mountSuspended(ProseA, {
      attrs: { href, color },
      slots: { default: content }
    })

    // then
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.html()).toContain('green')
  })

  it('renders mailto link correctly', async () => {
    // given
    const href = 'mailto:test@example.com'
    const content = 'Email Link'

    // when
    const wrapper = await mountSuspended(ProseA, {
      attrs: { href },
      slots: { default: content }
    })

    // then
    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe(href)
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })
}) 