<template>
  <div class="not-prose my-8">
    <div class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div class="flex items-center mb-4">
        <Icon name="tabler:folder" class="text-gray-600 dark:text-gray-400 mr-3" size="24" />
        <h4 class="font-title text-xl font-semibold text-gray-800 dark:text-gray-200">{{ title }}</h4>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-if="technologies" class="flex flex-col">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Technologien</span>
          <div class="flex flex-wrap gap-2">
            <span
                v-for="tech in technologies"
                :key="tech"
                class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div v-if="team" class="flex flex-col">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Team</span>
          <span class="text-gray-800 dark:text-gray-200">{{ team }}</span>
        </div>

        <div v-if="duration" class="flex flex-col">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Dauer</span>
          <span class="text-gray-800 dark:text-gray-200">{{ duration }}</span>
        </div>

        <div v-if="result" class="flex flex-col">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Ergebnis</span>
          <span class="text-gray-800 dark:text-gray-200">{{ result }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: {
    type: String,
    required: true
  },
  technologies: string[],
  team: {
    type: String,
    default: ''
  },
  duration: {
    type: String,
    default: ''
  },
  result: {
    type: String,
    default: ''
  }
}>()
</script>