<template>
  <button
    @click="toggleColorMode"
    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    :aria-label="colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Icon 
      :name="colorMode === 'dark' ? 'tabler:sun' : 'tabler:moon'" 
      size="20"
      class="text-gray-700 dark:text-gray-300"
    />
  </button>
</template>

<script setup>
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>