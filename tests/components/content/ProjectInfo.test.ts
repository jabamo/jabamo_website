import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectInfo from '../../../app/components/content/ProjectInfo.vue'

describe('ProjectInfo', () => {
  it('renders with all provided props', async () => {
    // given
    const props = {
      title: 'Test Project',
      technologies: ['Vue.js', 'TypeScript'],
      team: '3 Entwickler',
      duration: '6 Wochen',
      result: 'Successfully completed'
    }

    // when
    const wrapper = await mountSuspended(ProjectInfo, {
      props
    })

    // then
    expect(wrapper.text()).toContain('Test Project')
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('3 Entwickler')
    expect(wrapper.text()).toContain('6 Wochen')
    expect(wrapper.text()).toContain('Successfully completed')
  })

  it('renders folder icon and title', async () => {
    // given
    const props = { title: 'My Project' }

    // when
    const wrapper = await mountSuspended(ProjectInfo, { props })

    // then
    expect(wrapper.find('.flex.items-center').exists()).toBe(true)
    expect(wrapper.text()).toContain('My Project')
  })

  it('renders technologies when provided', async () => {
    // given
    const props = {
      title: 'Tech Project',
      technologies: ['React', 'Node.js']
    }

    // when
    const wrapper = await mountSuspended(ProjectInfo, { props })

    // then
    expect(wrapper.text()).toContain('Technologien')
    expect(wrapper.text()).toContain('React')
    expect(wrapper.text()).toContain('Node.js')
  })

  it('renders team when provided', async () => {
    // given
    const props = {
      title: 'Team Project',
      team: '5 Entwickler'
    }

    // when
    const wrapper = await mountSuspended(ProjectInfo, { props })

    // then
    expect(wrapper.text()).toContain('Team')
    expect(wrapper.text()).toContain('5 Entwickler')
  })

  it('renders duration when provided', async () => {
    // given
    const props = {
      title: 'Duration Project',
      duration: '8 Wochen'
    }

    // when
    const wrapper = await mountSuspended(ProjectInfo, { props })

    // then
    expect(wrapper.text()).toContain('Dauer')
    expect(wrapper.text()).toContain('8 Wochen')
  })

  it('renders result when provided', async () => {
    // given
    const props = {
      title: 'Result Project',
      result: 'Erfolgreich'
    }

    // when
    const wrapper = await mountSuspended(ProjectInfo, { props })

    // then
    expect(wrapper.text()).toContain('Ergebnis')
    expect(wrapper.text()).toContain('Erfolgreich')
  })

  it('does not render sections when props are not provided', async () => {
    // given
    const props = { title: 'Minimal Project' }

    // when
    const wrapper = await mountSuspended(ProjectInfo, { props })

    // then
    expect(wrapper.text()).toContain('Minimal Project')
    expect(wrapper.text()).not.toContain('Team')
    expect(wrapper.text()).not.toContain('Dauer')
    expect(wrapper.text()).not.toContain('Ergebnis')
  })
}) 