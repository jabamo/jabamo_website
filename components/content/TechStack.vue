<template>
  <div class="not-prose my-8">
    <div class="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl p-6 border border-accent-200 dark:border-accent-700">
      <div class="flex items-center mb-4">
        <Icon name="tabler:code" class="text-accent-600 dark:text-accent-400 mr-3" size="24" />
        <h4 class="font-title text-xl font-semibold text-accent-700 dark:text-accent-300">{{ title }}</h4>
      </div>
      <div class="flex flex-wrap gap-2">
        <span
            v-for="tech in technologies"
            :key="tech"
            class="px-3 py-1 bg-white dark:bg-gray-800 text-accent-600 dark:text-accent-400 rounded-full text-sm font-medium border border-accent-200 dark:border-accent-600"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  technologies: string[]
}>()
</script>