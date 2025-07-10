<template>
  <section class="max-w-4xl mx-auto px-6 py-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <div class="order-1">
        <div class="relative">
          <div class="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden bg-gradient-to-br from-accent-500 to-accent-600 p-1">
            <img
                src="/assets/img/profile.jpg"
                alt="Jona-David Bastian"
                class="w-full h-full object-cover rounded-full"
            />
          </div>
          <div class="absolute -top-4 -right-4 w-16 h-16 bg-accent-500/20 rounded-full animate-pulse"></div>
          <div class="absolute -bottom-6 -left-6 w-12 h-12 bg-accent-600/30 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>

      <div class="order-2 text-center lg:text-left">
        <div class="mb-6">
          <h1 class="font-title text-4xl lg:text-6xl font-bold mb-4">
            Hey, ich bin
            <span class="text-accent-500">Jona</span>
          </h1>
          <h2 class="font-title text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Fullstack Developer & Student
          </h2>
          <p class="font-content text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ich entwickle moderne Webanwendungen mit Fokus auf Backend-Technologien wie
            <span class="font-semibold text-accent-500">Java Spring</span> und
            <span class="font-semibold text-accent-500">Vue.js</span>.
            Aktuell studiere ich Informatik an der THM und sammle praktische Erfahrungen in der Softwareentwicklung.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <NuxtLink
              to="/projects"
              class="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
          >
            Meine Projekte
            <Icon name="tabler:arrow-right" class="ml-2" size="20" />
          </NuxtLink>
          <NuxtLink
              to="/about"
              class="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors"
          >
            Über mich
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>