<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
    <Header />

    <!-- vertikale trennlinien -->
    <div class="fixed inset-0 pointer-events-none z-50">
      <div class="max-w-5xl mx-auto h-full relative">
        <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
        <div class="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
      </div>
    </div>

    <main class="pt-20">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>
