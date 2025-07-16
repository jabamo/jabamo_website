<template>
  <header class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full shadow-lg">
    <nav class="px-6 py-3 flex items-center space-x-8">

      <div class="flex items-center space-x-8">
        <NuxtLink
            to="/"
            class="font-content text-sm transition-colors"
            :class="isActive('/') ? 'text-accent-500' : 'hover:text-accent-500'"
        >
          Home
        </NuxtLink>
        <NuxtLink
            to="/about"
            class="font-content text-sm transition-colors"
            :class="isActive('/about') ? 'text-accent-500' : 'hover:text-accent-500'"
        >
          Über
        </NuxtLink>
        <NuxtLink
            to="/projects"
            class="font-content text-sm transition-colors"
            :class="isActive('/projects') ? 'text-accent-500' : 'hover:text-accent-500'"
        >
          Projekte
        </NuxtLink>
        <NuxtLink
            to="/blog"
            class="font-content text-sm transition-colors"
            :class="isActive('/blog') ? 'text-accent-500' : 'hover:text-accent-500'"
        >
          Blog
        </NuxtLink>
      </div>

      <ColorModeButton />
    </nav>
  </header>
</template>

<script lang="ts" setup>
const route = useRoute()

const isActive = (path: string) => {
  if(path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>