import { describe, test, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import RecentProjects from '../../app/components/RecentProjects.vue'

describe('RecentProjects', () => {
  test('renders component with heading and description', async () => {
    // given
    // when
    const wrapper = await mountSuspended(RecentProjects)

    // then
    expect(wrapper.html()).toContain('Neueste Projekte')
    expect(wrapper.html()).toContain('Eine Auswahl meiner aktuellsten Arbeiten und Entwicklungen')
  })

  test('renders call-to-action button', async () => {
    // given
    // when
    const wrapper = await mountSuspended(RecentProjects)

    // then
    expect(wrapper.html()).toContain('Alle Projekte ansehen')
    expect(wrapper.find('a[href="/projects"]').exists()).toBe(true)
  })

  test('has correct component structure', async () => {
    // given
    // when
    const wrapper = await mountSuspended(RecentProjects)

    // then
    expect(wrapper.find('section.max-w-4xl').exists()).toBe(true)
    expect(wrapper.find('h2.font-title').exists()).toBe(true)
    expect(wrapper.find('.grid').exists()).toBe(true)
    expect(wrapper.find('.text-center').exists()).toBe(true)
  })

  test('renders grid container for projects', async () => {
    // given
    // when
    const wrapper = await mountSuspended(RecentProjects)

    // then
    expect(wrapper.find('.grid.grid-cols-1.md\\:grid-cols-2').exists()).toBe(true)
  })

  test('renders button with correct styling', async () => {
    // given
    // when
    const wrapper = await mountSuspended(RecentProjects)

    // then
    const button = wrapper.find('a[href="/projects"]')
    expect(button.classes()).toContain('bg-accent-500')
    expect(button.classes()).toContain('hover:bg-accent-600')
  })
})