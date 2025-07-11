<template>
  <div class="max-w-4xl mx-auto px-6 py-20">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="font-title text-4xl lg:text-5xl font-bold mb-6">
        Impressum
      </h1>
      <p class="font-content text-gray-600 dark:text-gray-400 text-lg">
        Angaben gemäß § 5 TMG
      </p>
    </div>

    <!-- Impressum Content -->
    <div class="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
      
      <!-- Angaben gemäß § 5 TMG -->
      <section class="mb-10">
        <h2 class="font-title text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Angaben gemäß § 5 TMG
        </h2>
        <div class="font-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <p class="mb-1">Jona-David Bastian</p>
          <p class="mb-1">Pfingstbornstraße 28</p>
          <p>35794 Mengerskirchen</p>
        </div>
      </section>

      <!-- Kontakt -->
      <section class="mb-10">
        <h2 class="font-title text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Kontakt
        </h2>
        <div class="font-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <div class="flex items-center mb-3">
            <Icon name="tabler:phone" size="20" class="text-accent-500 mr-3" />
            <span>06476-9154914</span>
          </div>
          <div class="flex items-center">
            <Icon name="tabler:mail" size="20" class="text-accent-500 mr-3" />
            <a 
              href="mailto:jb@jonabastian.io" 
              class="text-accent-500 hover:text-accent-600 transition-colors"
            >
              jb@jonabastian.io
            </a>
          </div>
        </div>
      </section>

      <!-- Redaktionell verantwortlich -->
      <section class="mb-10">
        <h2 class="font-title text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Redaktionell verantwortlich
        </h2>
        <div class="font-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <p class="mb-1">Jona-David Bastian</p>
          <p class="mb-1">Pfingstbornstraße 28</p>
          <p>35794 Mengerskirchen</p>
        </div>
      </section>

      <!-- Quelle -->
      <section class="pt-8 border-t border-gray-200 dark:border-gray-700">
        <p class="font-content text-sm text-gray-500 dark:text-gray-400">
          <span class="font-semibold">Quelle:</span> 
          <a 
            href="https://www.e-recht24.de" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-accent-500 hover:text-accent-600 transition-colors ml-1"
          >
            eRecht24
          </a>
        </p>
      </section>
    </div>

    <!-- Navigation zurück -->
    <div class="text-center mt-12">
      <NuxtLink 
        to="/"
        class="inline-flex items-center px-6 py-3 text-accent-500 hover:text-accent-600 font-medium transition-colors"
      >
        <Icon name="tabler:arrow-left" class="mr-2" size="20" />
        Zurück zur Startseite
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
// SEO Meta Tags
useHead({
  title: 'Impressum - Jona-David Bastian',
  meta: [
    { name: 'description', content: 'Impressum und Kontaktdaten von Jona-David Bastian - Fullstack Developer aus Mengerskirchen.' },
    { name: 'robots', content: 'noindex, nofollow' } // Impressum soll nicht in Suchmaschinen indexiert werden
  ]
})
</script>