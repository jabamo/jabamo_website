<template>
  <section class="max-w-4xl mx-auto px-6 pt-20 pb-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <div class="order-1">
        <div class="relative">
          <div
              class="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden bg-gradient-to-br from-accent-500 to-accent-600 p-1">
            <img
                src="/assets/img/profile.jpg"
                alt="Jona-David Bastian"
                class="w-full h-full object-cover rounded-full"
            >
          </div>
          <div class="absolute -top-4 -right-4 w-16 h-16 bg-accent-500/20 rounded-full animate-pulse"/>
          <div class="absolute -bottom-6 -left-6 w-12 h-12 bg-accent-600/30 rounded-full animate-pulse delay-700"/>
        </div>
      </div>

      <div class="order-2 text-center lg:text-left">
        <div class="mb-6">
          <h1 ref="titleElement" class="font-title text-4xl lg:text-6xl font-bold mb-4">
            Hey, ich bin
            <span class="text-accent-500">Jona</span>...
          </h1>
          <h2 class="font-title text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Werkstudent IT & DMS-Student an der THM
          </h2>
          <p class="font-content text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ich arbeite als Werkstudent in der IT mit <span class="font-semibold text-accent-500">PHP</span>,
            <span class="font-semibold text-accent-500">Symfony</span> und <span class="font-semibold text-accent-500">Vue.js</span>
            und entwickle privat sowie im Studium mit <span class="font-semibold text-accent-500">Node.js</span> und
            <span class="font-semibold text-accent-500">Express</span>.
            Während meines Digital Media Systems Studiums an der THM lerne ich zusätzlich
            <span class="font-semibold text-accent-500">Java Spring</span> und weitere Technologien.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <NuxtLink
              to="/projects"
              class="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
          >
            Meine Projekte
            <Icon name="tabler:arrow-right" class="ml-2" size="20"/>
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
<script setup lang="ts">
import {ref, onMounted} from 'vue'

const titleElement = ref<HTMLElement | null>(null)
const typewriterSpeed = 100

onMounted(() => {
  if (titleElement.value) {
    const fullText = titleElement.value.innerHTML
    typeText(fullText)
  }
})

function typeText(fullText: string): void {
  if (!titleElement.value) return

  titleElement.value.innerHTML = ''

  const segments: string[] = []
  let currentSegment = ''
  let inTag = false

  for (let i = 0; i < fullText.length; i++) {
    const char = fullText[i]

    // if html tag begins, add everything to segment until '>'
    if (char === '<') {
      if (currentSegment) {
        segments.push(currentSegment)
        currentSegment = ''
      }
      inTag = true
      currentSegment = char
    } else if (char === '>') {
      currentSegment += char
      segments.push(currentSegment)
      currentSegment = ''
      inTag = false
    } else if (inTag) {
      currentSegment += char
    } else {
      if (currentSegment) {
        segments.push(currentSegment)
        currentSegment = ''
      }
      segments.push(char ?? '')
    }
  }

  if (currentSegment) {
    segments.push(currentSegment)
  }

  let segmentIndex = 0
  let displayedText = ''

  const interval = setInterval(() => {
    if (segmentIndex < segments.length) {
      displayedText += segments[segmentIndex]
      titleElement.value!.innerHTML = displayedText + '<span class="caret absolute ml-[-1.25rem]">|</span>'
      segmentIndex++
    } else {
      titleElement.value!.innerHTML = displayedText + '<span class="caret absolute ml-[-1.25rem]">|</span>'
      clearInterval(interval)
    }
  }, typewriterSpeed)
}
</script>
<style scoped>
:deep(.caret) {
  animation: blink 1s infinite;
  font-weight: normal;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>

