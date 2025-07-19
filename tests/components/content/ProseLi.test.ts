import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProseLi from '../../../app/components/content/ProseLi.vue'

describe('ProseLi', () => {
  it('renders li element', async () => {
    // given
    const content = 'List item content'

    // when
    const wrapper = await mountSuspended(ProseLi, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('li').exists()).toBe(true)
    expect(wrapper.text()).toContain(content)
  })

  it('applies proper styling', async () => {
    // given
    const content = 'Styled list item'

    // when
    const wrapper = await mountSuspended(ProseLi, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('li').classes()).toContain('list-none')
  })

  it('renders with nested elements', async () => {
    // given
    const content = 'Item with <strong>emphasis</strong>'

    // when
    const wrapper = await mountSuspended(ProseLi, {
      slots: { default: content }
    })

    // then
    expect(wrapper.find('li').exists()).toBe(true)
    expect(wrapper.html()).toContain('emphasis')
  })
}) 