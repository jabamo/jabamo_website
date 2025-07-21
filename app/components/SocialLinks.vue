<template>
  <section class="max-w-4xl mx-auto px-6 py-12">
    <div class="text-center mb-8">
      <h3 class="font-title text-2xl font-semibold mb-4">Lass uns vernetzen</h3>
      <p class="font-content text-gray-600 dark:text-gray-400">Folge mir auf sozialen Medien oder kontaktiere mich direkt</p>
    </div>

    <div class="flex justify-center space-x-6">
      <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          :target="link.external ? '_blank' : '_self'"
          :rel="link.external ? 'noopener noreferrer' : ''"
          class="group flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-accent-500 dark:hover:bg-accent-500 transition-all duration-300 transform hover:scale-110"
          :aria-label="link.name"
          @click="link.onClick"
      >
        <Icon
            :name="link.icon"
            size="24"
            class="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors"
        />
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/jabamo',
    icon: 'tabler:brand-github',
    external: true,
    onClick: () => {}
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/jona-david-bastian-6664b3333/',
    icon: 'tabler:brand-linkedin',
    external: true,
    onClick: () => {}
  },
  {
    name: 'E-Mail',
    url: useEmail().emailLink.href,
    icon: 'tabler:mail',
    external: false,
    onClick: useEmail().emailLink.onClick
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/_jabamo_',
    icon: 'tabler:brand-discord',
    external: true,
    onClick: () => {}
  }
]
</script>