<template>
  <footer class="bg-white dark:bg-gray-900 py-8 relative z-10">
    <div class="max-w-4xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        <div class="text-center md:text-left">
          <p class="font-content text-sm text-gray-600 dark:text-gray-400">
            © {{ currentYear }} Jona-David Bastian
          </p>
        </div>

        <div class="flex items-center space-x-6">
          <NuxtLink 
            to="/legal/imprint" 
            class="font-content text-sm text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
          >
            Impressum
          </NuxtLink>
          <NuxtLink 
            to="/legal/privacy-policy" 
            class="font-content text-sm text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
          >
            Datenschutz
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-4">
          <a 
            href="https://github.com/jonadavidbastian" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
            aria-label="GitHub"
          >
            <Icon name="tabler:brand-github" size="20" />
          </a>
          <a 
            href="https://linkedin.com/in/jonadavidbastian" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Icon name="tabler:brand-linkedin" size="20" />
          </a>
          <a 
            href="mailto:jb@jonabastian.io"
            class="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
            aria-label="E-Mail"
          >
            <Icon name="tabler:mail" size="20" />
          </a>
          <a 
            href="https://discord.com/users/yourdiscordid" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
            aria-label="Discord"
          >
            <Icon name="tabler:brand-discord" size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>