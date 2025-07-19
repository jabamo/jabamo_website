<template>
  <div class="not-prose my-8">
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
      <div class="flex items-center mb-4">
        <Icon name="tabler:bulb" class="text-blue-600 dark:text-blue-400 mr-3" size="24" />
        <h4 class="font-title text-xl font-semibold text-blue-700 dark:text-blue-300">{{ title || 'Tipp' }}</h4>
      </div>

      <div class="text-blue-800 dark:text-blue-200 leading-relaxed">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string
}
withDefaults(defineProps<Props>(), {
  title: 'Tipp'
})
</script>