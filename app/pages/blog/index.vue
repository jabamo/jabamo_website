<template>
  <div>
    <section class="max-w-4xl mx-auto px-6 py-20">
      <div class="text-center mb-16">
        <h1 class="font-title text-4xl lg:text-5xl font-bold mb-6">
          Mein <span class="text-accent-500">Blog</span>
        </h1>
        <p class="font-content text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Gedanken, Erfahrungen und Tutorials zu Webentwicklung, Studium und allem,
          was mich als angehender Informatiker beschäftigt.
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">

        <div class="flex flex-wrap gap-3">
          <button
              class="px-4 py-2 rounded-lg transition-colors font-medium"
              :class="selectedCategory === null ?
              'bg-accent-500 text-white' :
              'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
              @click="selectedCategory = null"
          >
            Alle
          </button>
          <button
              v-for="category in categories"
              :key="category"
              class="px-4 py-2 rounded-lg transition-colors font-medium"
              :class="selectedCategory === category ?
              'bg-accent-500 text-white' :
              'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
              @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <div class="relative">
          <Icon
              name="tabler:search" size="20"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
          <input
              v-model="searchQuery"
              type="text"
              placeholder="Artikel suchen..."
              class="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
          >
        </div>
      </div>
    </section>

    <section v-if="featuredArticles.length > 0" class="max-w-4xl mx-auto px-6 mb-16">
      <h2 class="font-title text-2xl font-bold mb-8">Featured Artikel</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <BlogCard
            v-for="article in featuredArticles"
            :key="article.path"
            :article="article"
        />
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 pb-20">
      <div class="flex items-center justify-between mb-8">
        <h2 class="font-title text-2xl font-bold">
          {{ selectedCategory ? `${selectedCategory} Artikel` : 'Alle Artikel' }}
        </h2>
        <span class="text-sm text-gray-500 dark:text-gray-400 font-content">
          {{ filteredArticles.length }} {{ filteredArticles.length === 1 ? 'Artikel' : 'Artikel' }}
        </span>
      </div>

      <div v-if="filteredArticles.length === 0" class="text-center py-16">
        <Icon name="tabler:article" size="64" class="text-gray-400 mx-auto mb-4"/>
        <h3 class="font-title text-xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
          Keine Artikel gefunden
        </h3>
        <p class="font-content text-gray-400 dark:text-gray-500">
          Versuche einen anderen Filter oder Suchbegriff.
        </p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <BlogCard
            v-for="article in paginatedArticles"
            :key="article.path"
            :article="article"
        />
      </div>

      <div v-if="totalPages > 1" class="flex justify-center mt-12">
        <nav class="flex items-center space-x-2">
          <button
              :disabled="currentPage === 1"
              class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              @click="currentPage--"
          >
            <Icon name="tabler:chevron-left" size="20"/>
          </button>

          <span
              v-for="page in visiblePages"
              :key="page"
              class="px-3 py-2 rounded-lg cursor-pointer transition-colors"
              :class="page === currentPage ?
              'bg-accent-500 text-white' :
              'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'"
              @click="currentPage = page"
          >
            {{ page }}
          </span>

          <button
              :disabled="currentPage === totalPages"
              class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              @click="currentPage++"
          >
            <Icon name="tabler:chevron-right" size="20"/>
          </button>
        </nav>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 pb-16">
      <div
          class="bg-gradient-to-r from-accent-500/10 to-accent-600/10 rounded-2xl p-8 text-center border border-accent-500/20">
        <h2 class="font-title text-2xl font-bold mb-4">
          Hast du Fragen oder Anregungen zu Artikeln?
        </h2>
        <p class="font-content text-gray-600 dark:text-gray-400 mb-6">
          Melde dich gerne bei mir per Mail, ich versuche zeitnahe darauf zu antworten.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <a
              :href="useEmail().emailLink.href"
              class="inline-flex items-center justify-center gap-2 px-6 py-2 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
              @click="useEmail().emailLink.onClick"
          >
            <Icon name="tabler:mail" size="20"/>
            Mail schreiben
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
// SEO Meta Tags
useHead({
  title: 'Blog - Jona-David Bastian',
  meta: [
    {
      name: 'description',
      content: 'Meine Gedanken und Erfahrungen zu Development, Studium und neuesten Technologien. Tutorials, Tipps und persönliche Einblicke.'
    }
  ]
})

const {data: articles} = await useAsyncData('blog', () => {
  return queryCollection('blog').all();
})

interface QueryParams {
  selectedCategory: string | null
  searchQuery: string
  currentPage: number
}

const selectedCategory = ref<QueryParams['selectedCategory']>(null)
const searchQuery = ref('')
const currentPage = ref(1)
const articlesPerPage = 6

const categories = computed(() => {
  const cats = articles.value?.map(a => a.category) || []
  return [...new Set(cats)].sort()
})

const featuredArticles = computed(() => {
  return articles.value?.filter(a => a.featured) || []
})

const filteredArticles = computed(() => {
  let filtered = articles.value || []

  if (selectedCategory.value) {
    filtered = filtered.filter(article => article.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.tags?.some(tag => tag.toLowerCase().includes(query))
    )
  }

  if (!selectedCategory.value && !searchQuery.value) {
    filtered = filtered.filter(article => !article.featured)
  }

  return filtered
})

const totalPages = computed(() => {
  return Math.ceil(filteredArticles.value.length / articlesPerPage)
})

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage
  const end = start + articlesPerPage
  return filteredArticles.value.slice(start, end)
})

const visiblePages = computed(() => {
  const current = currentPage.value
  const total = totalPages.value
  const delta = 2

  let start = Math.max(1, current - delta)
  let end = Math.min(total, current + delta)

  if (end - start < delta * 2) {
    if (start === 1) {
      end = Math.min(total, start + delta * 2)
    } else if (end === total) {
      start = Math.max(1, end - delta * 2)
    }
  }

  return Array.from({length: end - start + 1}, (_, i) => start + i)
})

watch([selectedCategory, searchQuery], () => {
  currentPage.value = 1
})
</script>