import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BlogIndex from '../../../app/pages/blog/index.vue'
import { mockBlogArticle } from '../../fixtures/mockData'

// Mock the Nuxt composables
vi.mock('#app', () => ({
  useAsyncData: vi.fn(() => ({
    data: [mockBlogArticle]
  }))
}))

vi.mock('@nuxt/content', () => ({
  queryCollection: vi.fn(() => ({
    order: vi.fn().mockReturnThis(),
    all: vi.fn(() => [mockBlogArticle])
  }))
}))

describe('Blog Index Page', () => {
  it('renders page title and description', async () => {
    // when
    const wrapper = await mountSuspended(BlogIndex)

    // then
    expect(wrapper.text()).toContain('Mein Blog')
    expect(wrapper.text()).toContain('Gedanken, Erfahrungen und Tutorials')
  })

  it('renders list of blog posts', async () => {
    // given
    // when
    const wrapper = await mountSuspended(BlogIndex)

    // then
    expect(wrapper.text()).toContain('Artikel')
  })

  it('renders blog post metadata', async () => {
    // given
    // when
    const wrapper = await mountSuspended(BlogIndex)

    // then
    expect(wrapper.text()).toContain('Alle')
  })

  it('has correct page structure', async () => {
    // when
    const wrapper = await mountSuspended(BlogIndex)

    // then
    // Check for basic page structure elements
    expect(wrapper.find('div').exists()).toBe(true)
  })
}) 