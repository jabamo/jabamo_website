<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
    <AppHeader/>

    <!-- vertikale trennlinien -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="max-w-5xl mx-auto h-full relative">
        <div
            class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"/>
        <div
            class="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"/>
      </div>
    </div>

    <main class="pt-10">
      <NuxtPage/>
    </main>

    <AppFooter/>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

useHead({
  meta: [
    {
      name: 'theme-color',
      content: () => colorMode.value === 'dark' ? '#111827' : '#ffffff'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: () => colorMode.value === 'dark' ? 'black-translucent' : 'default'
    }
  ]
})
</script>

<style>
/* page transitions - see nuxt.config.ts for config */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  filter: blur(5px);
}
</style>