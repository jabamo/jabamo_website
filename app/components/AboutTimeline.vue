<template>
  <section class="max-w-4xl mx-auto px-6 py-0">
    <div class="text-center mb-16">
      <h2 class="font-title text-3xl font-bold mb-4">Mein Werdegang</h2>
      <p class="font-content text-gray-600 dark:text-gray-400 text-lg">
        Von den ersten Programmierschritten bis heute
      </p>
    </div>

    <div class="relative">
      <div
          class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full"/>
      <div
          ref="progressLine"
          class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent-500 transition-all duration-300 ease-out"
          :style="{ height: `${scrollProgress}%` }"
      />

      <div class="md:hidden absolute left-6 w-1 bg-gray-200 dark:bg-gray-700 h-full"/>
      <div
          ref="progressLineMobile"
          class="md:hidden absolute left-6 w-1 bg-accent-500 transition-all duration-300 ease-out"
          :style="{ height: `${scrollProgress}%` }"
      />


      <div class="space-y-16">
        <div
            v-for="(item, index) in timelineItems"
            :key="index"
            :ref="el => timelineItemRefs[index] = el as HTMLElement"
            class="relative flex items-center"
            :class="[
              'md:' + (index % 2 === 0 ? 'justify-start' : 'justify-end'),
              'justify-start'
            ]"
        >
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
            <div
                :class="[
                  'bg-accent-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transition-all duration-300 ease-out',
                  isPointActive(index) ? 'w-8 h-8' : 'w-6 h-6'
                ]"
            />
          </div>
          <div class="md:hidden absolute left-[1.625rem] transform -translate-x-1/2 z-10">
            <div
                :class="[
                  'bg-accent-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transition-all duration-300 ease-out',
                  isPointActive(index) ? 'w-6 h-6' : 'w-4 h-4'
                ]"
            />
          </div>


          <div
              :class="[
      'group',
      'md:w-5/12',
      index % 2 === 0 ? 'md:mr-auto xs:pr-8 md:pr-0' : 'md:ml-auto xs:pl-8 md:pl-0',
      'w-full pl-16 sm:pl-16 md:pl-0'
    ]"
          >


            <div
                class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">

              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center mr-3">
                  <Icon :name="item.icon" size="20" class="text-accent-500"/>
                </div>
                <div>
                  <span class="font-title text-sm text-accent-500 font-semibold">{{ item.period }}</span>
                  <h3 class="font-title text-lg font-bold break-words hyphens-auto">{{ item.title }}</h3>
                </div>
              </div>

              <div class="mb-3">
                <p class="font-content text-gray-600 dark:text-gray-400 font-medium">{{ item.institution }}</p>
                <p v-if="item.location" class="font-content text-sm text-gray-500 dark:text-gray-500">{{
                    item.location
                  }}</p>
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
import {ref, onMounted, onUnmounted} from 'vue'

const progressLine = ref<HTMLElement | null>(null)
const scrollProgress = ref(0)
const timelineItemRefs = ref<HTMLElement[]>([])

const timelineItems = [
  {
    period: '2011',
    title: 'Erste Webseite',
    institution: 'Selbststudium',
    location: 'Zuhause',
    icon: 'tabler:rosette-number-1',
    description: 'Mit elf Jahren habe ich mich zum ersten Mal aus Eigeninteresse mit HTML und CSS beschäftigt, und meine eigene Webseite (damals erreichbar unter jd-bastian.de) erstellt.',
    skills: ['Grundlagen HTML', 'Grundlagen CSS']
  },
  {
    period: '2015',
    title: 'Praktikum Softwareentwicklung',
    institution: 'SETEX GmbH',
    location: 'Mengerskirchen, Deutschland',
    icon: 'tabler:bulb',
    description: 'Schülerpraktikum bei SETEX. Dort durfte ich in die Abteilung der Anwendungsentwicklung reinschnuppern.',
    skills: ['Python', 'JavaScript', 'HTML/CSS', 'Git']
  },
  {
    period: '2019',
    title: 'Abitur',
    institution: 'Gymnasium Philippinum Weilburg',
    location: 'Weilburg, Deutschland',
    icon: 'tabler:certificate',
    description: 'Erfolgreicher Abschluss mit den Leistungskursen Englisch und Politik/Wirtschaft.',
    skills: ['Mathematik', 'Informatik', 'Grundlagen Programmierung']
  },
  {
    period: '2019-2023',
    title: 'IT-Support & IT-Systemintegration',
    institution: 'Nanoris GmbH',
    location: 'Home',
    icon: 'tabler:network',
    description: 'Planung und Konzeption von Netzwerkarchitekturen (vorwiegend Ubiquiti), Durchführung kleinerer Projekte (z.B. auf RasPis)',
    skills: ['Raspberry Pi', 'Ubiquiti']
  },
  {
    period: '2019-2024',
    title: 'Netzwerkaufbau und -wartung',
    institution: 'zederbaum development GmbH',
    location: 'Wiesbaden, Deutschland',
    icon: 'tabler:cloud-network',
    description: 'Planung, Wartung und Aufbau von firmeninternen Netzwerken mit Windows Server 2019',
    skills: ['Windows Server 2019', 'MS Azure', 'Active Directory', 'Microsoft Sharepoint']
  },
  {
    period: '2023 - Heute',
    title: 'Digital Media Systems-Studium',
    institution: 'Technische Hochschule Mittelhessen',
    location: 'Gießen, Deutschland',
    icon: 'tabler:school',
    description: 'Bachelor-Studium mit Vertiefung in Informatik. Orientierungsphase mit Grundlagen der BWL und des Mediendesigns.',
    skills: ['TypeScript', 'Node.js', 'Express', 'Java', 'Spring', 'OOP', 'Vue.js', 'Ionic', 'Capacitor']
  },
  {
    period: '2024 - Heute',
    title: 'Werkstudent Softwareentwicklung',
    institution: 'Jeuck Software',
    location: 'Mengerskirchen, Deutschland',
    icon: 'tabler:code',
    description: 'Umsetzung diverser Softwareprojekte (z.B. JTL Shop, PHP-Backends, usw.), Bearbeitung von Issues in bestehenden Projekten, z.B. Oktoo.',
    skills: ['PHP', 'Symfony', 'Twig', 'JTL Shop + WaWi', 'Smarty', 'Docker', 'CI/CD']
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