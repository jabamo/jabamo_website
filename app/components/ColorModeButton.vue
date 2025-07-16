<template>
  <button
    @click="toggleColorMode"
    class="flex p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    :aria-label="colorMode.value === 'dark' ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'"
  >
    <Icon 
      :name="colorMode.value === 'dark' ? 'tabler:sun' : 'tabler:moon'"
      size="20"
      class="items-center justify-center text-gray-700 dark:text-gray-300"
    />
  </button>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>