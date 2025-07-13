<template>
  <div class="not-prose my-8">
    <div class="bg-gray-900 dark:bg-gray-950 rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
      <div class="bg-gray-800 dark:bg-gray-900 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="flex space-x-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span v-if="language" class="text-gray-400 text-sm font-title">{{ language }}</span>
        </div>
        <button
            @click="copyCode"
            class="text-gray-400 hover:text-white transition-colors p-1 rounded"
            title="Code kopieren"
        >
          <Icon name="tabler:copy" size="16" />
        </button>
      </div>

      <div class="relative">
        <pre class="p-4 overflow-x-auto text-sm leading-relaxed"><code class="font-title text-gray-100"><slot /></code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  language: {
    type: String,
    default: ''
  }
})

const copyCode = async () => {
  try {
    const codeElement = document.querySelector('pre code')
    if (codeElement) {
      await navigator.clipboard.writeText(codeElement.textContent)
    }
  } catch (err) {
    console.error('Fehler beim Kopieren:', err)
  }
}
</script>