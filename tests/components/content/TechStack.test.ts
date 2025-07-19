import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import TechStack from '../../../app/components/content/TechStack.vue'

const mockTechnologies = ['Vue.js', 'Nuxt.js', 'TypeScript', 'TailwindCSS']

describe('TechStack', () => {
  it('renders with default props', async () => {
    // given
    const technologies = ['Vue.js', 'TypeScript', 'Node.js']

    // when
    const wrapper = await mountSuspended(TechStack, {
      props: { technologies }
    })

    // then
    expect(wrapper.find('.flex.items-center').exists()).toBe(true)
    expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
  })

  it('renders technologies list', async () => {
    // given
    const technologies = ['React', 'Next.js', 'JavaScript']
    const title = 'Frontend Stack'

    // when
    const wrapper = await mountSuspended(TechStack, {
      props: { title, technologies }
    })

    // then
    expect(wrapper.text()).toContain('Frontend Stack')
    expect(wrapper.text()).toContain('React')
    expect(wrapper.text()).toContain('Next.js')
    expect(wrapper.text()).toContain('JavaScript')
  })

  it('renders with custom title', async () => {
    // given
    const customTitle = 'My Tech Stack'
    const technologies = ['Vue.js']

    // when
    const wrapper = await mountSuspended(TechStack, {
      props: { title: customTitle, technologies }
    })

    // then
    expect(wrapper.text()).toContain(customTitle)
  })

  it('renders technology badges with correct styling', async () => {
    // given
    const title = 'Technologies'

    // when
    const wrapper = await mountSuspended(TechStack, {
      props: { title, technologies: mockTechnologies }
    })

    // then
    const badges = wrapper.findAll('.bg-white')
    expect(badges.length).toBe(4)
    badges.forEach(badge => {
      expect(badge.classes()).toContain('rounded-full')
      expect(badge.classes()).toContain('text-accent-600')
    })
  })

  it('renders empty technologies list when no technologies provided', async () => {
    // given
    const title = 'Empty Tech Stack'

    // when
    const wrapper = await mountSuspended(TechStack, {
      props: { title, technologies: [] }
    })

    // then
    expect(wrapper.text()).toContain('Empty Tech Stack')
    expect(wrapper.findAll('.bg-white').length).toBe(0)
  })
}) 