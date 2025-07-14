<template>
  <div class="not-prose my-8">
    <div class="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-2xl">
      <div class="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="flex space-x-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span v-if="language" class="text-gray-500 dark:text-gray-400 text-sm font-title">{{ language }}</span>
          <span v-if="filename" class="text-gray-600 dark:text-gray-300 text-sm font-medium">{{ filename }}</span>
        </div>
        <button
            @click="copyCode"
            class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors p-1 rounded copy-button"
            title="Code kopieren"
        >
        <svg v-if="!copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <svg v-else-if="copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
        </button>
      </div>

      <pre
          ref="codeElement"
          :class="[
        $props.class,
        '!mt-[1rem] !pl-[1rem] !pb-[1rem] !rounded-t-none !rounded-b-xl !border-t-0 overflow-x-scroll'
      ]"
      ><slot /></pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// we need to use all props from original ProsePre component for Shiki to work
interface Props {
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  meta?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  highlights: () => [],
  code: '',
  language: '',
  filename: '',
  meta: '',
  class: ''
})

const copied = ref(false)
const codeElement = ref<HTMLElement | null>(null)

const copyCode = async () => {
  try {
    if (codeElement.value) {
      await navigator.clipboard.writeText(codeElement.value.textContent || '')
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 1500)
    }
  } catch (err) {
    console.error('Fehler beim Kopieren:', err)
  }
}
</script>