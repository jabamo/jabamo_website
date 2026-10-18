import { describe, it, expect, vi } from 'vitest'
import ProjectsIndex from '../../../app/pages/projects/index.vue'
import { mockNuxtImport, mountSuspended } from "@nuxt/test-utils/runtime";
import { mockProject } from '../../fixtures/mockData'
import {ref} from "vue";

mockNuxtImport('useAsyncData', () => {
    return () => ({
        data: ref([mockProject])
    })
})

vi.mock('@nuxt/content', () => ({
  queryCollection: vi.fn(() => ({
    order: vi.fn().mockReturnThis(),
    all: vi.fn(() => [mockProject])
  }))
}))

describe('Projects Index Page', () => {
  it('renders page title and description', async () => {
    // when
    const wrapper = await mountSuspended(ProjectsIndex)

    // then
    expect(wrapper.text()).toContain('Meine Projekte')
    expect(wrapper.text()).toContain('Eine Sammlung meiner Arbeiten')
  })

  it('renders list of projects', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectsIndex)

    // then
    expect(wrapper.text()).toContain('Projekte')
  })

  it('renders project metadata', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectsIndex)

    // then
    expect(wrapper.text()).toContain('Alle')
  })

  it('renders featured projects', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ProjectsIndex)

    // then
    expect(wrapper.text()).toContain('Projekte')
  })

  it('has correct page structure', async () => {
    // when
    const wrapper = await mountSuspended(ProjectsIndex)

    // then
    expect(wrapper.find('div').exists()).toBe(true)
  })
}) 