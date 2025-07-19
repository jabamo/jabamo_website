<template>
  <div v-if="project">
    <section class="max-w-4xl mx-auto px-6 pt-16 pb-0">
      <div class="text-center mb-12">
        <nav class="flex justify-center mb-6">
          <ol class="flex items-center space-x-2 text-sm font-content">
            <li><NuxtLink to="/projects" class="text-accent-500 hover:text-accent-600">Projekte</NuxtLink></li>
            <li><Icon name="tabler:chevron-right" size="16" class="text-gray-400" /></li>
            <li class="text-gray-600 dark:text-gray-400">{{ project.title }}</li>
          </ol>
        </nav>

        <div class="flex flex-wrap justify-center items-center gap-3 mb-6">
          <span class="px-3 py-1 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm rounded-full font-medium">
            {{ project.category }}
          </span>
          <span v-if="project.featured" class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm rounded-full font-medium">
            Featured
          </span>
          <span class="px-3 py-1 rounded-full text-sm font-medium"
                :class="project.status === 'Live' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                        project.status === 'In Development' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                        'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'">
            {{ project.status }}
          </span>
        </div>

        <h1 class="font-title text-4xl lg:text-5xl font-bold mb-6">
          {{ project.title }}
        </h1>
        <p class="font-content text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
          {{ project.description }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a v-if="project.demo"
             :href="project.demo"
             target="_blank"
             class="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors">
            <Icon name="tabler:external-link" class="mr-2" size="20" />
            Live Demo
          </a>
          <a v-if="project.github"
             :href="project.github"
             target="_blank"
             class="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors">
            <Icon name="tabler:brand-github" class="mr-2" size="20" />
            Code ansehen
          </a>
        </div>
      </div>

      <div v-if="project.image" class="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-12">
        <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover"
        />
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 pb-12 pt-0">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div class="lg:col-span-2 order-2 lg:order-1">
          <div class="prose prose-lg dark:prose-invert max-w-none font-content">
            <ContentRenderer :value="project" />
          </div>
        </div>

        <aside class="space-y-8 lg:sticky top-[7rem] self-start order-1 lg:order-2">

          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 class="font-title font-semibold text-lg mb-4">Projektdetails</h3>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="font-title font-medium text-gray-500 dark:text-gray-400">Datum:</span>
                <span class="font-content">{{ formatDate(project.date) }}</span>
              </div>
              <div v-if="project.duration" class="flex justify-between">
                <span class="font-title font-medium text-gray-500 dark:text-gray-400">Dauer:</span>
                <span class="font-content">{{ project.duration }}</span>
              </div>
              <div v-if="project.role" class="flex justify-between">
                <span class="font-title font-medium text-gray-500 dark:text-gray-400">Rolle:</span>
                <span class="font-content">{{ project.role }}</span>
              </div>
              <div class="flex justify-between">
                <span class="font-title font-medium text-gray-500 dark:text-gray-400">Status:</span>
                <span class="font-content"
                      :class="project.status === 'Live' ? 'text-green-600 dark:text-green-400' :
                              project.status === 'In Development' ? 'text-blue-600 dark:text-blue-400' :
                              'text-gray-600 dark:text-gray-400'">
                  {{ project.status }}
                </span>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 class="font-title font-semibold text-lg mb-4">Technologien</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm rounded-full font-medium">
                {{ tech }}
              </span>
            </div>
          </div>

          <div v-if="project.github || project.demo" class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 class="font-title font-semibold text-lg mb-4">Links</h3>
            <div class="space-y-3">
              <a v-if="project.github"
                 :href="project.github"
                 target="_blank"
                 class="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent-500 transition-colors">
                <Icon name="tabler:brand-github" class="mr-3" size="20" />
                <span class="font-content">GitHub Repository</span>
                <Icon name="tabler:external-link" class="ml-auto" size="16" />
              </a>
              <a v-if="project.demo"
                 :href="project.demo"
                 target="_blank"
                 class="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent-500 transition-colors">
                <Icon name="tabler:world-www" class="mr-3" size="20" />
                <span class="font-content">Live Demo</span>
                <Icon name="tabler:external-link" class="ml-auto" size="16" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>

  <div v-else class="max-w-4xl mx-auto px-6 py-20 text-center">
    <Icon name="tabler:file-x" size="64" class="text-gray-400 mx-auto mb-4" />
    <h1 class="font-title text-2xl font-bold mb-4">Projekt nicht gefunden</h1>
    <p class="font-content text-gray-600 dark:text-gray-400 mb-8">
      Das angeforderte Projekt existiert nicht oder wurde entfernt.
    </p>
    <NuxtLink
        to="/projects"
        class="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
    >
      Zurück zu den Projekten
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const {data: project} = await useAsyncData(route.path, () => {
  return queryCollection('projects').path(route.path).first()
})

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Projekt nicht gefunden'
  })
}

useHead({
  title: `${project.value.title} - Jona-David Bastian`,
  meta: [
    { name: 'description', content: project.value.description },
    { property: 'og:title', content: project.value.title },
    { property: 'og:description', content: project.value.description },
    { property: 'og:image', content: project.value.image },
    { property: 'og:type', content: 'article' }
  ]
})
</script>