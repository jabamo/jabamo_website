import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ExperienceCards from '../../app/components/ExperienceCards.vue'

describe('ExperienceCards', () => {
  it('renders experience section', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ExperienceCards)

    // then
    expect(wrapper.find('section').exists()).toBe(true)
  })

  it('renders experience cards', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ExperienceCards)

    // then
    expect(wrapper.find('.grid').exists()).toBe(true)
  })

  it('contains experience content', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ExperienceCards)

    // then
    expect(wrapper.text()).toContain('Erfahrungen')
  })

  it('has proper section structure', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ExperienceCards)

    // then
    expect(wrapper.find('h2').exists()).toBe(true)
  })

  it('renders card headings', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ExperienceCards)

    // then
    expect(wrapper.find('h3').exists()).toBe(true)
  })

  it('contains experience descriptions', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ExperienceCards)

    // then
    expect(wrapper.find('p').exists()).toBe(true)
  })
}) 