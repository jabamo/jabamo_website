import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HeroSection from '../../app/components/HeroSection.vue'

describe('HeroSection', () => {
  it('renders hero content with title and description', async () => {
    // given
    // when
    const wrapper = await mountSuspended(HeroSection)

    // then
    expect(wrapper.text()).toContain('Werkstudent IT & DMS-Student an der THM')
    expect(wrapper.text()).toContain('Digital Media Systems')
  })

  it('renders call-to-action buttons', async () => {
    // given
    // when
    const wrapper = await mountSuspended(HeroSection)

    // then
    expect(wrapper.find('a[href="/projects"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/about"]').exists()).toBe(true)
  })

  it('has proper navigation links', async () => {
    // given
    // when
    const wrapper = await mountSuspended(HeroSection)

    // then
    const projectsLink = wrapper.find('a[href="/projects"]')
    const aboutLink = wrapper.find('a[href="/about"]')
    
    expect(projectsLink.exists()).toBe(true)
    expect(aboutLink.exists()).toBe(true)
    expect(projectsLink.text()).toContain('Projekte')
    expect(aboutLink.text()).toContain('Über mich')
  })

  it('contains main hero section structure', async () => {
    // given
    // when
    const wrapper = await mountSuspended(HeroSection)

    // then
    expect(wrapper.find('section').exists()).toBe(true)
    expect(wrapper.text()).toContain('Student')
  })
}) 