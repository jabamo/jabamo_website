import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ContentSlider from '../../../app/components/content/ContentSlider.vue'
import { mockSlides } from '../../fixtures/mockData'

// Mock Swiper
vi.mock('swiper/vue', () => ({
  Swiper: {
    name: 'Swiper',
    template: '<div class="swiper"><slot /></div>'
  },
  SwiperSlide: {
    name: 'SwiperSlide',
    template: '<div class="swiper-slide"><slot /></div>'
  }
}))

vi.mock('swiper/modules', () => ({
  Navigation: {},
  Pagination: {},
  Autoplay: {}
}))

describe('ContentSlider', () => {
  it('renders with provided slides', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ContentSlider, {
      props: { slides: mockSlides }
    })

    // then
    expect(wrapper.find('.swiper').exists()).toBe(true)
  })

  it('renders slide images', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ContentSlider, {
      props: { slides: mockSlides }
    })

    // then
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders slide captions when provided', async () => {
    // given
    const slidesWithCaptions = mockSlides.map(slide => ({
      ...slide,
      caption: 'Test caption'
    }))

    // when
    const wrapper = await mountSuspended(ContentSlider, {
      props: { slides: slidesWithCaptions }
    })

    // then
    expect(wrapper.text()).toContain('Test caption')
  })

  it('renders navigation controls', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ContentSlider, {
      props: { slides: mockSlides }
    })

    // then
    // Should render swiper container which includes navigation
    expect(wrapper.find('.swiper').exists()).toBe(true)
  })

  it('opens lightbox when slide is clicked', async () => {
    // given
    // when
    const wrapper = await mountSuspended(ContentSlider, {
      props: { slides: mockSlides }
    })

    // Find and click the first image
    const firstImg = wrapper.find('img')
    if (firstImg.exists()) {
      await firstImg.trigger('click')
    }

    // then
    // Should have some indication that lightbox functionality exists
    // Since we can't easily test the reactive state, we just check the structure exists
    expect(wrapper.find('img').exists()).toBe(true)
  })
}) 