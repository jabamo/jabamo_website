<template>
  <div class="not-prose my-8">
    <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
      <div class="flex items-center mb-4">
        <Icon name="tabler:bulb" class="text-green-600 dark:text-green-400 mr-3" size="24" />
        <h4 class="font-title text-xl font-semibold text-green-700 dark:text-green-300">{{ title }}</h4>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div v-for="skill in skills" :key="skill.name" class="flex items-start">
          <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <div>
            <span class="font-medium text-green-800 dark:text-green-200">{{ skill.name }}</span>
            <span class="text-green-600 dark:text-green-400">: {{ skill.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Skill {
  name: string
  description: string
}
defineProps<{
  title: string
  skills: Skill[]
}>()
</script>