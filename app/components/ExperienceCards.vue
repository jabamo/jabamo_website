<template>
  <section class="max-w-4xl mx-auto px-6 py-12">
    <div class="text-center mb-12">
      <h2 class="font-title text-3xl font-bold mb-4">Meine Erfahrungen</h2>
      <p class="font-content text-gray-600 dark:text-gray-400 text-lg">
        Technologien und Bereiche, in denen ich Erfahrung gesammelt habe
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="group bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mr-4">
            <Icon name="tabler:code" size="24" class="text-accent-500" />
          </div>
          <h3 class="font-title text-xl font-semibold">Frontend-Development</h3>
        </div>

        <p class="font-content text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Moderne, responsive Webanwendungen mit Frameworks wie Vue.js, Nuxt und TypeScript.
          Fokus dabei auf UX und Performance.
        </p>

        <div class="space-y-3">
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in frontendTechs" :key="tech"
                  class="px-3 py-1 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm rounded-full font-medium">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <div class="group bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mr-4">
            <Icon name="tabler:server" size="24" class="text-accent-500" />
          </div>
          <h3 class="font-title text-xl font-semibold">Backend-Development</h3>
        </div>

        <p class="font-content text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Robuste REST-APIs in Monolith-Struktur mit Node.js und Express.
          Erste Erfahrungen mit Java+Spring sowie GraphQL-APIs.
        </p>

        <div class="space-y-3">
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in backendTechs" :key="tech"
                  class="px-3 py-1 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm rounded-full font-medium">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const frontendTechs = [
  'Vue.js', 'React', 'Angular', 'Nuxt.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap 4', 'JavaScript', 'HTML/CSS'
]

const backendTechs = [
  'Node.js', 'Express', 'Java', 'Spring', 'PostgreSQL', 'Docker', 'REST', 'GraphQL'
]
</script>