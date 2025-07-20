<template>
  <section class="max-w-4xl mx-auto px-6 py-12">
    <div class="text-center mb-12">
      <h2 class="font-title text-3xl font-bold mb-4">Neueste Projekte</h2>
      <p class="font-content text-gray-600 dark:text-gray-400 text-lg">
        Eine Auswahl meiner aktuellsten Arbeiten und Entwicklungen
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div
          v-for="project in projects" :key="project.path"
          class="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">

        <div class="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
          <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          >
          <div v-else class="w-full h-full flex items-center justify-center">
            <Icon name="tabler:photo" size="48" class="text-gray-400"/>
          </div>
        </div>

        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <span
                class="px-3 py-1 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm rounded-full font-medium">
              {{ project.category }}
            </span>
            <span
                v-if="project.featured"
                class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm rounded-full font-medium">
              Featured
            </span>
          </div>

          <h3 class="font-title text-xl font-semibold mb-3 group-hover:text-accent-500 transition-colors">
            <NuxtLink
                :to="project.path"
            >
              {{ project.title }}
            </NuxtLink>
          </h3>

          <p class="font-content text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
                v-for="tech in project.technologies.slice(0, 3)" :key="tech"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded font-medium">
              {{ tech }}
            </span>
            <span
                v-if="project.technologies.length > 3"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded font-medium">
              +{{ project.technologies.length - 3 }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex space-x-3">
              <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  class="inline-flex items-center text-accent-500 hover:text-accent-600 text-sm font-medium transition-colors">
                <Icon name="tabler:external-link" size="16" class="mr-1"/>
                Demo
              </a>
              <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm font-medium transition-colors">
                <Icon name="tabler:brand-github" size="16" class="mr-1"/>
                Code
              </a>
            </div>

            <NuxtLink
                :to="project.path"
                class="inline-flex items-center text-accent-500 hover:text-accent-600 text-sm font-medium transition-colors">
              Details
              <Icon name="tabler:arrow-right" size="16" class="ml-1"/>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <NuxtLink
          to="/projects"
          class="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors">
        Alle Projekte ansehen
        <Icon name="tabler:arrow-right" size="20" class="ml-2"/>
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
const {data: projects} = await useAsyncData('recentprojects', () => {
  return queryCollection('projects')
      .where('featured', '=', true)
      .order('date', 'DESC')
      .limit(4)
      .all();
})
</script>