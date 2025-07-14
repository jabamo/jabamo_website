<template>
  <div class="not-prose my-8">
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
</template>

<script lang="ts" setup>
interface Props {
  src: string
  alt: string
  caption?: string
  size?: 'small' | 'medium' | 'large' | 'full'
  loading?: 'eager' | 'lazy'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'full',
  loading: 'lazy'
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
</script>