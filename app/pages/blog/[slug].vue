<template>
  <div v-if="article">
    <article class="max-w-4xl mx-auto px-6 py-16">

      <nav class="flex justify-center mb-6">
        <ol class="flex items-center space-x-2 text-sm font-content">
          <li>
            <NuxtLink to="/blog" class="text-accent-500 hover:text-accent-600">Blog</NuxtLink>
          </li>
          <li class="flex">
            <Icon name="tabler:chevron-right" size="16" class="text-gray-400"/>
          </li>
          <li class="text-gray-600 dark:text-gray-400">{{ article.title }}</li>
        </ol>
      </nav>

      <header class="text-center mb-12">
        <div class="flex flex-wrap justify-center items-center gap-3 mb-6">
          <span
              class="px-3 py-1 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm rounded-full font-medium">
            {{ article.category }}
          </span>
          <span
              v-if="article.featured"
              class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm rounded-full font-medium">
            Featured
          </span>
        </div>

        <h1 class="font-title text-4xl lg:text-5xl font-bold mb-6 leading-tight break-words hyphens-auto">
          {{ article.title }}
        </h1>

        <p class="font-content text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
          {{ article.description }}
        </p>

        <div
            class="flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-6 text-sm text-gray-500 dark:text-gray-400">
          <div class="flex items-center space-x-2">
            <Icon name="tabler:user" size="20"/>
            <span class="font-content">{{ article.author }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="tabler:calendar" size="20"/>
            <time class="font-content">{{ formatDate(article.date) }}</time>
          </div>
          <div v-if="article.readTime" class="flex items-center space-x-2">
            <Icon name="tabler:clock" size="20"/>
            <span class="font-content">{{ article.readTime }}</span>
          </div>
        </div>
      </header>

      <div
          v-if="article.image"
          class="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-12">
        <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-full object-cover"
        >
      </div>

      <div class="prose prose-lg dark:prose-invert max-w-none font-content">
        <ContentRenderer :value="article"/>
      </div>

      <div
          v-if="article.tags && article.tags.length > 0"
          class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h3 class="font-title font-semibold text-lg mb-4">Tags</h3>
        <div class="flex flex-wrap gap-2">
          <span
              v-for="tag in article.tags"
              :key="tag"
              class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h3 class="font-title font-semibold text-lg mb-4">Artikel teilen</h3>
        <div class="flex space-x-4">
          <a
              :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(fullUrl)}`"
              target="_blank"
              class="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              aria-label="Auf Twitter teilen"
          >
            <Icon name="tabler:brand-twitter" size="20"/>
          </a>
          <a
              :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`"
              target="_blank"
              class="flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
              aria-label="Auf LinkedIn teilen"
          >
            <Icon name="tabler:brand-linkedin" size="20"/>
          </a>
          <button
              v-if="!isCopied"
              class="flex items-center justify-center w-12 h-12 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
              aria-label="Link kopieren"
              @click="copyToClipboard"
          >
            <Icon name="tabler:link" size="20"/>
          </button>
          <span
              v-else-if="isCopied"
              class="flex items-center justify-center w-12 h-12 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
              aria-label="Link wurde kopiert"
          >
            <Icon name="tabler:checks" size="20"/>
          </span>
        </div>
      </div>
    </article>

    <section v-if="relatedArticles && relatedArticles.length > 0" class="max-w-4xl mx-auto px-6 py-16">
      <h2 class="font-title text-3xl font-bold text-center mb-12">Ähnliche Artikel</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <BlogCard
            v-for="relatedArticle in relatedArticles"
            :key="relatedArticle.path"
            :article="relatedArticle"
        />
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
          >
            <Icon name="tabler:mail" size="20"/>
            Mail schreiben
          </a>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="max-w-4xl mx-auto px-6 py-20 text-center">
    <Icon name="tabler:file-x" size="64" class="text-gray-400 mx-auto mb-4"/>
    <h1 class="font-title text-2xl font-bold mb-4">Artikel nicht gefunden</h1>
    <p class="font-content text-gray-600 dark:text-gray-400 mb-8">
      Der angeforderte Artikel existiert nicht oder wurde entfernt.
    </p>
    <NuxtLink
        to="/blog"
        class="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
    >
      Zurück zum Blog
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const route = useRoute()
const {data: article} = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

const isCopied = ref(false)

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artikel nicht gefunden'
  })
}

const {data: relatedArticles} = await useAsyncData(`relatedArticles-${article.value?.id}`, () => {
      return queryCollection('blog')
          .where('published', '=', true)
          .andWhere(query => query.where('id', '<>', article.value?.id)) // make sure it's not the same article
          .orWhere(query => query.where('category', '=', article.value?.category).where('tags', 'IN', article.value?.tags))
          .limit(3)
          .all()
    },
    {
      watch: [route],
    }
)

useHead({
  title: `${article.value.title} - Jona-David Bastian`,
  meta: [
    {name: 'description', content: article.value.description},
    {name: 'author', content: article.value.author},
    {name: 'keywords', content: article.value.tags?.join(', ')},
    {property: 'og:title', content: article.value.title},
    {property: 'og:description', content: article.value.description},
    {property: 'og:image', content: article.value.image},
    {property: 'og:type', content: 'article'},
    {property: 'article:author', content: article.value.author},
    {property: 'article:published_time', content: article.value.date},
    {property: 'article:tag', content: article.value.tags?.join(',')}
  ]
})

const fullUrl = computed(() => {
  const requestURL = useRequestURL()
  return requestURL.href
})


const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(fullUrl.value)
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false
    }, 1500)
  } catch (err) {
    console.error('Fehler beim Kopieren:', err)
  }
}
</script>