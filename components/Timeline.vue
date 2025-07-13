<template>
  <section class="max-w-4xl mx-auto px-6 py-16">
    <div class="text-center mb-16">
      <h2 class="font-title text-3xl font-bold mb-4">Mein Werdegang</h2>
      <p class="font-content text-gray-600 dark:text-gray-400 text-lg">
        Von den ersten Programmierschritten bis heute
      </p>
    </div>

    <div class="relative">
      <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full"></div>

      <div
          ref="progressLine"
          class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent-500 transition-all duration-300 ease-out"
          :style="{ height: `${scrollProgress}%` }"
      ></div>

      <div class="space-y-16">
        <div
            v-for="(item, index) in timelineItems"
            :key="index"
            :ref="el => timelineItemRefs[index] = el as HTMLElement"
            class="relative flex items-center"
            :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
        >
          <div class="absolute left-1/2 transform -translate-x-1/2 z-10">
            <div
                :class="[
      'bg-accent-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transition-all duration-300 ease-out',
      isPointActive(index) ? 'w-8 h-8' : 'w-6 h-6'
    ]"
            ></div>
          </div>

          <div
              class="w-5/12 group"
              :class="index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'"
          >
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">

              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center mr-3">
                  <Icon :name="item.icon" size="20" class="text-accent-500" />
                </div>
                <div>
                  <span class="font-title text-sm text-accent-500 font-semibold">{{ item.period }}</span>
                  <h3 class="font-title text-lg font-bold">{{ item.title }}</h3>
                </div>
              </div>

              <div class="mb-3">
                <p class="font-content text-gray-600 dark:text-gray-400 font-medium">{{ item.institution }}</p>
                <p v-if="item.location" class="font-content text-sm text-gray-500 dark:text-gray-500">{{ item.location }}</p>
              </div>

              <p class="font-content text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {{ item.description }}
              </p>

              <div v-if="item.skills && item.skills.length > 0" class="flex flex-wrap gap-2">
                <span
                    v-for="skill in item.skills"
                    :key="skill"
                    class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progressLine = ref<HTMLElement | null>(null)
const scrollProgress = ref(0)
const timelineItemRefs = ref<HTMLElement[]>([])

const timelineItems = [
  {
    period: '2024 - Heute',
    title: 'Backend Developer',
    institution: 'Deine Firma/Praktikum',
    location: 'Stadt, Deutschland',
    icon: 'tabler:code',
    description: 'Entwicklung von REST APIs mit Spring Boot und Microservices-Architektur. Arbeit mit PostgreSQL und Docker für Container-basierte Deployments.',
    skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Microservices']
  },
  {
    period: '2022 - Heute',
    title: 'Informatik Studium',
    institution: 'Technische Hochschule Mittelhessen',
    location: 'Gießen, Deutschland',
    icon: 'tabler:school',
    description: 'Bachelor-Studium mit Fokus auf Softwareentwicklung, Algorithmen und Datenstrukturen. Praktische Projekte in Java, Python und Webentwicklung.',
    skills: ['Java', 'Python', 'Algorithmen', 'Datenstrukturen', 'Software Engineering']
  },
  {
    period: '2023',
    title: 'Frontend Developer',
    institution: 'Freelance/Projekterfahrung',
    location: 'Remote',
    icon: 'tabler:world-www',
    description: 'Entwicklung moderner Webanwendungen mit Vue.js und Nuxt. Responsive Design und Performance-Optimierung standen im Fokus.',
    skills: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design']
  },
  {
    period: '2021 - 2022',
    title: 'Erste Programmiererfahrungen',
    institution: 'Selbststudium',
    location: 'Home',
    icon: 'tabler:bulb',
    description: 'Beginn meiner Programmierreise mit Python und JavaScript. Erste kleine Projekte und Teilnahme an Online-Kursen.',
    skills: ['Python', 'JavaScript', 'HTML/CSS', 'Git']
  },
  {
    period: '2020',
    title: 'Abitur',
    institution: 'Deine Schule',
    location: 'Stadt, Deutschland',
    icon: 'tabler:certificate',
    description: 'Erfolgreicher Abschluss mit Schwerpunkt in Mathematik und Informatik. Erste Berührung mit Programmierung im Informatikunterricht.',
    skills: ['Mathematik', 'Informatik', 'Grundlagen Programmierung']
  }
]

const updateScrollProgress = () => {
  if (!progressLine.value) return

  const element = progressLine.value.parentElement
  if (!element) return

  const rect = element.getBoundingClientRect()
  const elementTop = rect.top + window.scrollY
  const elementHeight = element.offsetHeight
  const windowHeight = window.innerHeight
  const scrollTop = window.scrollY

  const start = elementTop - windowHeight * 0.5
  const end = elementTop + elementHeight - windowHeight * 0.5

  scrollProgress.value = Math.max(0, Math.min(100, ((scrollTop - start) / (end - start)) * 100))
}

const isPointActive = (index: number) => {
  const element = progressLine.value?.parentElement
  const timelineItem = timelineItemRefs.value[index]

  if (!element || !timelineItem) return false

  const containerRect = element.getBoundingClientRect()
  const itemRect = timelineItem.getBoundingClientRect()

  const containerTop = containerRect.top + window.scrollY
  const itemTop = itemRect.top + window.scrollY
  const itemHeight = itemRect.height

  const pointPosition = (itemTop + itemHeight / 2) - containerTop

  const linePosition = element.offsetHeight * scrollProgress.value / 100

  return linePosition >= pointPosition
}



onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>