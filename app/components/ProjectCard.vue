<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
       :class="reverse ? 'lg:grid-flow-col-dense' : ''">

    <div class="relative group" :class="reverse ? 'lg:col-start-2' : ''">
      <div class="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <img
            v-if="project.image"
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div v-else class="w-full h-full flex items-center justify-center">
          <Icon name="tabler:photo" size="48" class="text-gray-400" />
        </div>
      </div>

      <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center space-x-4">
        <a v-if="project.demo"
           :href="project.demo"
           target="_blank"
           class="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors">
          <Icon name="tabler:external-link" size="20" class="mr-2" />
          Demo
        </a>
        <a v-if="project.github"
           :href="project.github"
           target="_blank"
           class="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
          <Icon name="tabler:brand-github" size="20" class="mr-2" />
          Code
        </a>
      </div>
    </div>

    <div class="space-y-6" :class="reverse ? 'lg:col-start-1' : ''">
      <div>
        <div class="flex items-center space-x-3 mb-2">
          <span class="px-3 py-1 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm rounded-full font-medium">
            {{ project.category }}
          </span>
          <span v-if="project.featured" class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm rounded-full font-medium">
            Featured
          </span>
        </div>
        <h3 class="font-title text-2xl lg:text-3xl font-bold mb-3">
          <NuxtLink
              :to="`/projects/${project.path.split('/').pop()}`"
          >
          {{ project.title }}
          </NuxtLink>
        </h3>
        <p class="font-content text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          {{ project.description }}
        </p>
      </div>

      <div>
        <h4 class="font-title font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
          Technologien
        </h4>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700">
            {{ tech }}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span class="font-title font-semibold text-gray-500 dark:text-gray-400">Status:</span>
          <span class="ml-2 font-content"
                :class="project.status === 'Live' ? 'text-green-600 dark:text-green-400' :
                        project.status === 'In Development' ? 'text-blue-600 dark:text-blue-400' :
                        'text-gray-600 dark:text-gray-400'">
            {{ project.status }}
          </span>
        </div>
        <div v-if="project.duration">
          <span class="font-title font-semibold text-gray-500 dark:text-gray-400">Dauer:</span>
          <span class="ml-2 font-content text-gray-700 dark:text-gray-300">{{ project.duration }}</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 pt-4">
        <NuxtLink
            :to="`/projects/${project.path.split('/').pop()}`"
            class="inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
        >
          Details ansehen
          <Icon name="tabler:arrow-right" class="ml-2" size="20" />
        </NuxtLink>

        <div class="flex space-x-3">
          <a v-if="project.github"
             :href="project.github"
             target="_blank"
             class="inline-flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors">
            <Icon name="tabler:brand-github" size="20" />
          </a>
          <a v-if="project.demo"
             :href="project.demo"
             target="_blank"
             class="inline-flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors">
            <Icon name="tabler:external-link" size="20" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>