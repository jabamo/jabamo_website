<template>
  <div>
    <section class="max-w-4xl mx-auto px-6 pt-20 pb-0">
      <div class="text-center mb-16">
        <h1 class="font-title text-4xl lg:text-5xl font-bold mb-6">
          Meine <span class="text-accent-500">Projekte</span>
        </h1>
        <p class="font-content text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Eine Sammlung meiner Arbeiten aus Studium, Praktika und persönlichen Projekten.
          Von Backend-APIs bis hin zu modernen Frontend-Anwendungen.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
            @click="selectedCategory = null"
            class="px-4 py-2 rounded-lg transition-colors font-medium"
            :class="selectedCategory === null ?
            'bg-accent-500 text-white' :
            'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
        >
          Alle
        </button>
        <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-4 py-2 rounded-lg transition-colors font-medium"
            :class="selectedCategory === category ?
            'bg-accent-500 text-white' :
            'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 pb-0">
      <div v-if="filteredProjects.length === 0" class="text-center py-0">
        <Icon name="tabler:folder-open" size="64" class="text-gray-400 mx-auto mb-4" />
        <h3 class="font-title text-xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
          Keine Projekte gefunden
        </h3>
        <p class="font-content text-gray-400 dark:text-gray-500">
          Versuche einen anderen Filter oder komme später wieder.
        </p>
      </div>

      <div v-else class="space-y-20">
        <ProjectCard
            v-for="(project, index) in filteredProjects"
            :key="project.path"
            :project="project"
            :reverse="index % 2 === 1"
        />
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 py-16">
      <div class="bg-gradient-to-r from-accent-500/10 to-accent-600/10 rounded-2xl p-8 md:p-12 text-center border border-accent-500/20">
        <h2 class="font-title text-3xl font-bold mb-4">
          Interesse an einer Zusammenarbeit?
        </h2>
        <p class="font-content text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Ich bin immer offen für spannende Projekte und neue Herausforderungen.
          Schreib mich gerne an, wenn Du Kontakt mit mir aufnehmen möchtest!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
              href="mailto:jona@example.com"
              class="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
          >
            <Icon name="tabler:mail" class="mr-2" size="20" />
            Kontakt aufnehmen
          </a>
          <NuxtLink
              to="/about"
              class="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors"
          >
            Mehr über mich
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Projekte - Jona-David Bastian',
  meta: [
    { name: 'description', content: 'Entdecke meine Projekte aus Studium und Praxis. Von Backend bis Frontend - Express, Spring, Nuxt.js und mehr.' }
  ]
})

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects')
      .order('date', 'DESC')
      .order('featured', 'DESC')
      .all();
})

interface QueryParams {
  selectedCategory: string | null
  searchQuery: string
  currentPage: number
}

const selectedCategory = ref<QueryParams['selectedCategory']>(null)

const categories = computed(() => {
  const cats = projects.value?.map(p => p.category) || []
  return [...new Set(cats)].sort()
})

const filteredProjects = computed(() => {
  if (!selectedCategory.value || !projects.value) {
    return projects.value || []
  }
  return projects.value.filter(project => project.category === selectedCategory.value)
})
</script>