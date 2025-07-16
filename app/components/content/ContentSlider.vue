
<template>
  <div class="not-prose my-8" v-if="validSlides.length > 0">
    <div :class="[
      'relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm mx-auto',
      containerSizeClass
    ]">
      <Swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :loop="loop"
          :autoplay="autoplayConfig"
          :navigation="navigationConfig"
          :pagination="paginationConfig"
          @slideChange="onSlideChange"
          class="w-full h-full"
      >
        <SwiperSlide
            v-for="(slide, index) in validSlides"
            :key="index"
        >
          <div class="relative">
            <img
                :src="slide.src"
                :alt="slide.alt || `Slide ${index + 1}`"
                class="w-full h-auto object-cover"
                :style="{ height: slideHeight }"
                @click="openLightbox(index)"
            />

            <div
                v-if="slide.caption"
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent pt-16 pb-4 px-4"
            >
              <div class="flex items-center">
                <Icon
                    name="tabler:photo"
                    class="text-white mr-3 flex-shrink-0"
                    size="16"
                />
                <span class="font-content text-white text-sm leading-relaxed font-medium">
                  {{ slide.caption }}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div v-if="!autoplay" class="swiper-button-prev"></div>
      <div v-if="!autoplay" class="swiper-button-next"></div>

      <div class="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
        {{ currentSlideIndex }} / {{ validSlides.length }}
      </div>
    </div>

    <div v-if="title" class="mt-4 text-center">
      <h3 class="font-title text-xl font-semibold text-gray-800 dark:text-gray-200">
        {{ title }}
      </h3>
    </div>
  </div>

  <div v-else class="not-prose my-8">
    <div class="text-center p-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
      <Icon name="tabler:photo-off" class="mx-auto text-gray-400 mb-2" size="48" />
      <p class="text-gray-500 dark:text-gray-400">Keine Bilder verfügbar</p>
    </div>
  </div>

  <Teleport to="body">
    <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          @click="closeLightbox"
      >
        <div class="relative max-w-full max-h-full">
          <button
              @click="closeLightbox"
              class="absolute top-4 right-4 z-10 bg-black bg-opacity-60 hover:bg-opacity-80 text-white w-10 h-10 rounded-full transition-colors flex items-center justify-center"
              aria-label="Schließen"
          >
            <Icon name="tabler:x" size="24" />
          </button>

          <button
              v-if="validSlides.length > 1"
              @click.stop="previousLightboxSlide"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-60 hover:bg-opacity-80 text-white w-12 h-12 rounded-full transition-colors flex items-center justify-center"
              aria-label="Vorheriges Bild"
          >
            <Icon name="tabler:chevron-left" size="24" />
          </button>

          <button
              v-if="validSlides.length > 1"
              @click.stop="nextLightboxSlide"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-60 hover:bg-opacity-80 text-white w-12 h-12 rounded-full transition-colors flex items-center justify-center"
              aria-label="Nächstes Bild"
          >
            <Icon name="tabler:chevron-right" size="24" />
          </button>

          <div class="relative">
            <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
                mode="out-in"
            >
              <img
                  :key="currentLightboxIndex"
                  :src="currentLightboxSlide.src"
                  :alt="currentLightboxSlide.alt || 'Vollbild'"
                  class="max-w-full max-h-full object-contain"
                  @click.stop
              />
            </Transition>

            <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-4"
                mode="out-in"
            >
              <div
                  v-if="currentLightboxSlide.caption"
                  :key="currentLightboxIndex + '-caption'"
                  class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent pt-16 pb-4 px-4"
              >
                <div class="flex items-center">
                  <Icon
                      name="tabler:photo"
                      class="text-white mr-3 flex-shrink-0"
                      size="16"
                  />
                  <span class="font-content text-white text-sm leading-relaxed font-medium">
                  {{ currentLightboxSlide.caption }}
                </span>
                </div>
              </div>
            </Transition>
          </div>

          <div
              v-if="validSlides.length > 1"
              class="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm font-medium"
          >
            {{ currentLightboxIndex + 1 }} / {{ validSlides.length }}
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, computed, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface SlideData {
  src: string
  alt?: string
  caption?: string
}

interface Props {
  slides?: SlideData[]
  title?: string
  autoplay?: boolean
  autoplayDelay?: number
  size?: 'small' | 'medium' | 'large' | 'full'
  height?: string
  loop?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  slides: () => [],
  autoplay: false,
  autoplayDelay: 3000,
  size: 'full',
  height: 'auto',
  loop: true
})

const currentSlideIndex = ref(1)

const lightboxOpen = ref(false)
const currentLightboxIndex = ref(0)

const swiperModules = [Navigation, Pagination, Autoplay]

const validSlides = computed(() => {
  return Array.isArray(props.slides) ? props.slides : []
})

const containerSizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'max-w-sm'
    case 'medium':
      return 'max-w-2xl'
    case 'large':
      return 'max-w-4xl'
    case 'full':
    default:
      return 'max-w-full'
  }
})

const slideHeight = computed(() => {
  if (props.height === 'auto') return 'auto'
  return props.height
})

const autoplayConfig = computed(() => {
  if (!props.autoplay) return false
  return {
    delay: props.autoplayDelay,
    disableOnInteraction: false
  }
})

const navigationConfig = computed(() => {
  if (props.autoplay) return false
  return {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

const paginationConfig = {
  clickable: true
}

const currentLightboxSlide = computed(() => {
  return validSlides.value[currentLightboxIndex.value] || { src: '', alt: '', caption: '' }
})

const openLightbox = (index: number) => {
  currentLightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextLightboxSlide = () => {
  if (currentLightboxIndex.value < validSlides.value.length - 1) {
    currentLightboxIndex.value++
  } else {
    currentLightboxIndex.value = 0
  }
}

const previousLightboxSlide = () => {
  if (currentLightboxIndex.value > 0) {
    currentLightboxIndex.value--
  } else {
    currentLightboxIndex.value = validSlides.value.length - 1
  }
}

const onSlideChange = (swiper: any) => {
  currentSlideIndex.value = swiper.realIndex + 1
}

onUnmounted(() => {
  if (lightboxOpen.value) {
    document.body.style.overflow = ''
  }
})
</script>