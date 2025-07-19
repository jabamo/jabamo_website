<template>
  <div class="not-prose my-8">
    <div class="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-700">
      <div class="flex items-center mb-4">
        <Icon name="tabler:star" class="text-yellow-600 dark:text-yellow-400 mr-3" size="24" />
        <h4 class="font-title text-xl font-semibold text-yellow-700 dark:text-yellow-300">{{ title }}</h4>
      </div>

      <div class="text-yellow-800 dark:text-yellow-200 leading-relaxed">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
}
defineProps<Props>()
</script>