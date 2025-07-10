<template>
  <div class="min-h-screen flex items-center justify-center px-6">
    <div class="text-center">
      <h1 class="font-title text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <h2 class="font-title text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Seite nicht gefunden
      </h2>
      <p class="font-content text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <NuxtLink
          to="/"
          class="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
      >
        Zur Startseite
      </NuxtLink>
    </div>
  </div>
</template>