<template>
  <header class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full shadow-lg">
    <nav class="px-6 py-3 flex items-center space-x-8">
      <!-- Logo/Name -->
      <NuxtLink to="/" class="font-title font-bold text-lg whitespace-nowrap">
        Jona-David Bastian
      </NuxtLink>

      <div class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/" class="font-content text-sm hover:text-accent-500 transition-colors">Home</NuxtLink>
        <NuxtLink to="/about" class="font-content text-sm hover:text-accent-500 transition-colors">Über mich</NuxtLink>
        <NuxtLink to="/projects" class="font-content text-sm hover:text-accent-500 transition-colors">Projekte</NuxtLink>
        <NuxtLink to="/blog" class="font-content text-sm hover:text-accent-500 transition-colors">Blog</NuxtLink>
      </div>

      <ColorModeButton />

      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Menu öffnen"
      >
        <Icon :name="mobileMenuOpen ? 'tabler:x' : 'tabler:menu-2'" size="20" />
      </button>
    </nav>

    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-2xl mt-1"
    >
      <nav class="px-6 py-4 space-y-3">
        <NuxtLink 
          to="/" 
          @click="mobileMenuOpen = false"
          class="block font-content text-sm hover:text-accent-500 transition-colors"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          @click="mobileMenuOpen = false"
          class="block font-content text-sm hover:text-accent-500 transition-colors"
        >
          Über mich
        </NuxtLink>
        <NuxtLink 
          to="/projects" 
          @click="mobileMenuOpen = false"
          class="block font-content text-sm hover:text-accent-500 transition-colors"
        >
          Projekte
        </NuxtLink>
        <NuxtLink 
          to="/blog" 
          @click="mobileMenuOpen = false"
          class="block font-content text-sm hover:text-accent-500 transition-colors"
        >
          Blog
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>