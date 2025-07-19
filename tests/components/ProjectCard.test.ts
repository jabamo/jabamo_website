import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectCard from '../../app/components/ProjectCard.vue'
import { mockProject } from '../fixtures/mockData'

describe('ProjectCard', () => {
  it('renders project with all provided data', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: mockProject, reverse: false }
    })

    // then
    expect(wrapper.text()).toContain('Test Project')
    expect(wrapper.text()).toContain('This is a test project description')
    expect(wrapper.text()).toContain('Web Development')
    expect(wrapper.text()).toContain('Featured')
  })

  it('renders project image when provided', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: mockProject, reverse: false }
    })

    // then
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('/assets/img/test-project-image.jpg')
    expect(wrapper.find('img').attributes('alt')).toBe('Test Project')
  })

  it('renders fallback icon when no image provided', async () => {
    // given
    const projectWithoutImage = { ...mockProject, image: '' }

    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: projectWithoutImage, reverse: false }
    })

    // then
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.flex.items-center.justify-center').exists()).toBe(true)
  })

  it('renders demo and github links when provided', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: mockProject, reverse: false }
    })

    // then
    expect(wrapper.find(`a[href="${mockProject.demo}"]`).exists()).toBe(true)
    expect(wrapper.find(`a[href="${mockProject.github}"]`).exists()).toBe(true)
  })

  it('does not render demo link when not provided', async () => {
    // given
    const projectWithoutDemo = { ...mockProject, demo: '' }

    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: projectWithoutDemo, reverse: false }
    })

    // then
    expect(wrapper.find(`a[href="${mockProject.demo}"]`).exists()).toBe(false)
  })

  it('renders featured badge when project is featured', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: mockProject, reverse: false }
    })

    // then
    expect(wrapper.text()).toContain('Featured')
  })

  it('does not render featured badge when project is not featured', async () => {
    // given
    const projectNotFeatured = { ...mockProject, featured: false }

    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: projectNotFeatured, reverse: false }
    })

    // then
    expect(wrapper.text()).not.toContain('Featured')
  })

  it('renders technologies list', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: mockProject, reverse: false }
    })

    // then
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('Nuxt.js')
    expect(wrapper.text()).toContain('TypeScript')
  })

  it('applies reverse layout when reverse prop is true', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: mockProject, reverse: true }
    })

    // then
    expect(wrapper.find('.lg\\:grid-flow-col-dense').exists()).toBe(true)
  })

  it('renders project status and duration', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: mockProject, reverse: false }
    })

    // then
    expect(wrapper.text()).toContain('Live')
    expect(wrapper.text()).toContain('6 Wochen')
  })

  it('renders project link with correct path', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectCard, {
      props: { project: mockProject, reverse: false }
    })

    // then
    const link = wrapper.find('a[href="/projects/test-project"]')
    expect(link.exists()).toBe(true)
  })
}) 