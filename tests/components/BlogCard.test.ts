import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BlogCard from '../../app/components/BlogCard.vue'
import { mockBlogArticle } from '../fixtures/mockData'

describe('BlogCard', () => {
  it('renders article with all provided data', async () => {
    // given
    // when
    const wrapper = await mountSuspended(BlogCard, {
      props: { article: mockBlogArticle }
    })

    // then
    expect(wrapper.text()).toContain('Test Blog Article')
    expect(wrapper.text()).toContain('This is a test blog article description')
    expect(wrapper.text()).toContain('Technology')
    expect(wrapper.text()).toContain('5 min')
  })

  it('renders article image when provided', async () => {
    // given
    // when
    const wrapper = await mountSuspended(BlogCard, {
      props: { article: mockBlogArticle }
    })

    // then
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('/assets/img/test-blog-image.jpg')
    expect(wrapper.find('img').attributes('alt')).toBe('Test Blog Article')
  })

  it('renders fallback icon when no image provided', async () => {
    // given
    const articleWithoutImage = { ...mockBlogArticle, image: '' }

    // when
    const wrapper = await mountSuspended(BlogCard, {
      props: { article: articleWithoutImage }
    })

    // then
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.flex.items-center.justify-center').exists()).toBe(true)
  })

  it('renders article metadata', async () => {
    // given
    // when
    const wrapper = await mountSuspended(BlogCard, {
      props: { article: mockBlogArticle }
    })

    // then
    expect(wrapper.text()).toContain('Technology')
    expect(wrapper.text()).toContain('5 min')
    expect(wrapper.text()).toContain('Jona-David Bastian')
  })

  it('renders article tags', async () => {
    // given
    // when
    const wrapper = await mountSuspended(BlogCard, {
      props: { article: mockBlogArticle }
    })

    // then
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('Nuxt.js')
    expect(wrapper.text()).toContain('Testing')
  })

  it('renders article link', async () => {
    // given
    // when
    const wrapper = await mountSuspended(BlogCard, {
      props: { article: mockBlogArticle }
    })

    // then
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.text()).toContain('Lesen')
  })

  it('has proper article structure', async () => {
    // given
    // when
    const wrapper = await mountSuspended(BlogCard, {
      props: { article: mockBlogArticle }
    })

    // then
    expect(wrapper.find('article').exists()).toBe(true)
    expect(wrapper.find('h2').exists()).toBe(true)
  })

  it('renders with hover effects', async () => {
    // given
    // when
    const wrapper = await mountSuspended(BlogCard, {
      props: { article: mockBlogArticle }
    })

    // then
    expect(wrapper.find('.group').exists()).toBe(true)
  })

  it('shows read time when available', async () => {
    // given
    // when
    const wrapper = await mountSuspended(BlogCard, {
      props: { article: mockBlogArticle }
    })

    // then
    expect(wrapper.text()).toContain('5 min')
  })

  it('handles article without read time', async () => {
    // given
    const articleWithoutReadTime = { ...mockBlogArticle, readTime: undefined }

    // when
    const wrapper = await mountSuspended(BlogCard, {
      props: { article: articleWithoutReadTime }
    })

    // then
    expect(wrapper.find('article').exists()).toBe(true)
    expect(wrapper.text()).not.toContain('min')
  })
}) 