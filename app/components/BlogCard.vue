<template>
  <article class="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 transition-all duration-300 hover:shadow-xl">

    <div class="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
      <img
          v-if="article.image"
          :src="article.image"
          :alt="article.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <Icon name="tabler:article" size="48" class="text-gray-400" />
      </div>
    </div>

    <div class="p-6">

      <div class="flex items-center space-x-4 mb-3 text-sm">
        <span class="px-3 py-1 bg-accent-500/10 text-accent-600 dark:text-accent-400 rounded-full font-medium">
          {{ article.category }}
        </span>
        <time class="text-gray-500 dark:text-gray-400 font-content">
          {{ formatDate(article.date) }}
        </time>
        <span v-if="article.readTime" class="text-gray-500 dark:text-gray-400 font-content flex items-center">
          <Icon name="tabler:clock" size="16" class="mr-1" />
          {{ article.readTime }}
        </span>
      </div>

      <h2 class="font-title text-xl font-bold mb-3 line-clamp-2 group-hover:text-accent-500 transition-colors">
        {{ article.title }}
      </h2>

      <p class="font-content text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {{ article.description }}
      </p>

      <div class="flex flex-wrap gap-2 mb-4">
        <span
            v-for="tag in article.tags?.slice(0, 3)"
            :key="tag"
            class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
        >
          {{ tag }}
        </span>
        <span
            v-if="article.tags?.length > 3"
            class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full"
        >
          +{{ article.tags.length - 3 }}
        </span>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Icon name="tabler:user" size="16" />
          <span class="font-content">{{ article.author }}</span>
        </div>

        <NuxtLink
            :to="`/blog/${article.path.split('/').pop()}`"
            class="inline-flex items-center px-4 py-2 text-accent-500 hover:text-accent-600 font-medium text-sm transition-colors"
        >
          Lesen
          <Icon name="tabler:arrow-right" class="ml-1" size="16" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>