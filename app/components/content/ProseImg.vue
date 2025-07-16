<template>
  <div :class="[
    'not-prose',
    floatClass,
    marginClass
  ]">
    <figure class="group">
      <div :class="[
        'relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 mx-auto',
        containerSizeClass
      ]">
        <img
            :src="src"
            :alt="alt"
            class="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            :loading="loading"
            @click="openLightbox"
        />

        <div
            v-if="caption || alt"
            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent pt-16 pb-4 px-4 z-20"
        >
          <div class="flex items-center">
            <Icon
                name="tabler:photo"
                class="text-white/90 mr-3 flex-shrink-0"
                size="16"
            />
            <span class="font-content text-white text-sm leading-relaxed font-medium drop-shadow-lg">
              {{ caption || alt }}
            </span>
          </div>
        </div>
      </div>
    </figure>
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

          <div class="relative">
            <img
                :src="src"
                :alt="alt"
                class="max-w-full max-h-full object-contain"
                @click.stop
            />

            <div
                v-if="caption || alt"
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent pt-16 pb-4 px-4"
            >
              <div class="flex items-center">
                <Icon
                    name="tabler:photo"
                    class="text-white mr-3 flex-shrink-0"
                    size="16"
                />
                <span class="font-content text-white text-sm leading-relaxed font-medium">
                  {{ caption || alt }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, computed, onUnmounted } from 'vue'

interface Props {
  src: string
  alt: string
  caption?: string
  size?: 'small' | 'medium' | 'large' | 'full'
  loading?: 'eager' | 'lazy'
  float?: 'left' | 'right' | 'none'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'full',
  loading: 'lazy',
  float: 'none'
})

const lightboxOpen = ref(false)

const containerSizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'max-w-[15rem]'
    case 'medium':
      return 'max-w-2xl'
    case 'large':
      return 'max-w-4xl'
    case 'full':
    default:
      return 'max-w-full'
  }
})

const floatClass = computed(() => {
  switch (props.float) {
    case 'left':
      return 'md:float-left'
    case 'right':
      return 'md:float-right'
    case 'none':
    default:
      return ''
  }
})

const marginClass = computed(() => {
  switch (props.float) {
    case 'left':
      return 'my-8 md:mr-6 md:mb-4 md:mt-0'
    case 'right':
      return 'my-8 md:ml-6 md:mb-4 md:mt-0'
    case 'none':
    default:
      return 'my-8'
  }
})

const openLightbox = () => {
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

onUnmounted(() => {
  if (lightboxOpen.value) {
    document.body.style.overflow = ''
  }
})
</script>