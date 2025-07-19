<template>
  <div>
    <section class="max-w-4xl mx-auto px-6 pt-20 pb-0">
      <div class="text-center mb-16">
        <h1 class="font-title text-4xl lg:text-5xl font-bold mb-6">
          Über <span class="text-accent-500">mich</span>
        </h1>
        <p class="font-content text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Hi! Ich bin Jona, ein leidenschaftlicher Developer, der vor allem Interesse an allen Aspekten rund um die
          Backend-Entwicklung hat.
          Ich studiere zur Zeit Digital Media Systems an der THM in Gießen in der Vertiefungsrichtung Informatik.
          Meine Reise in die Welt der Nullen und Einsen begann bereits in frühem Kindesalter
          und hat mich seitdem durch einige Bereiche der Informatik geführt.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <Icon name="tabler:code" size="32" class="text-accent-500 mx-auto mb-4"/>
          <h3 class="font-title font-semibold text-lg mb-2">Backend-Fokus</h3>
          <p class="font-content text-gray-600 dark:text-gray-400 text-sm">
            Node.js + Express, PostgreSQL, MariaDB, PHP + Symfony
          </p>
        </div>

        <div
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <Icon name="tabler:school" size="32" class="text-accent-500 mx-auto mb-4"/>
          <h3 class="font-title font-semibold text-lg mb-2">Student</h3>
          <p class="font-content text-gray-600 dark:text-gray-400 text-sm">
            Digital Media Systems B.Sc. an der THM
          </p>
        </div>

        <div
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <Icon name="tabler:rocket" size="32" class="text-accent-500 mx-auto mb-4"/>
          <h3 class="font-title font-semibold text-lg mb-2">Ambitioniert</h3>
          <p class="font-content text-gray-600 dark:text-gray-400 text-sm">
            Ich lerne nie aus und bin immer motiviert, mich weiterzuentwickeln.
          </p>
        </div>
      </div>
    </section>

    <AboutTimeline/>

    <section class="max-w-4xl mx-auto px-6 py-16">
      <div class="text-center mb-12">
        <h2 class="font-title text-3xl font-bold mb-4">Technologien & Skills</h2>
        <p class="font-content text-gray-600 dark:text-gray-400">
          Die Tools und Technologien, mit denen ich arbeite
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="category in skillCategories" :key="category.name"
            class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <div class="flex items-center mb-4">
            <Icon :name="category.icon" size="24" class="text-accent-500 mr-3"/>
            <h3 class="font-title font-semibold text-lg">{{ category.name }}</h3>
          </div>
          <div class="space-y-3">
            <div v-for="skill in category.skills" :key="skill.name" class="flex items-center justify-between">
              <span class="font-content text-sm">{{ skill.name }}</span>
              <div class="flex space-x-1">
                <div
                    v-for="i in 5" :key="i"
                    class="w-2 h-2 rounded-full"
                    :class="i <= skill.level ? 'bg-accent-500' : 'bg-gray-300 dark:bg-gray-600'"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 py-16">
      <div class="text-center mb-12">
        <h2 class="font-title text-3xl font-bold mb-4">Wenn ich nicht programmiere...</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
            v-for="interest in interests" :key="interest.name"
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          <Icon :name="interest.icon" size="32" class="text-accent-500 mx-auto mb-3"/>
          <h4 class="font-title font-semibold mb-2">{{ interest.name }}</h4>
          <p class="font-content text-sm text-gray-600 dark:text-gray-400">{{ interest.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Über mich - Jona-David Bastian',
  meta: [
    {
      name: 'description',
      content: 'Erfahre mehr über meinen Werdegang als Student und angehender Developer. Von den ersten Programmierschritten bis heute.'
    }
  ]
})

const skillCategories = [
  {
    name: 'Backend',
    icon: 'tabler:server',
    skills: [
      {name: 'Express.js', level: 5},
      {name: 'REST APIs', level: 4},
      {name: 'GraphQL APIs', level: 2},
      {name: 'Symfony', level: 3},
      {name: 'Java Spring', level: 1}
    ]
  },
  {
    name: 'Frontend',
    icon: 'tabler:device-desktop',
    skills: [
      {name: 'Vue.js', level: 5},
      {name: 'TypeScript', level: 4},
      {name: 'Nuxt.js', level: 3},
      {name: 'Tailwind CSS', level: 4},
      {name: 'Bootstrap', level: 3}
    ]
  },
  {
    name: 'Sonstiges',
    icon: 'tabler:tools',
    skills: [
      {name: 'Git', level: 4},
      {name: 'Node.js', level: 4},
      {name: 'Docker', level: 4},
      {name: 'Composer', level: 3},
      {name: 'Twig', level: 2}
    ]
  }
]

const interests = [
  {
    name: 'Reisen',
    icon: 'tabler:luggage',
    description: 'Den eigenen Horizont erweitern'
  },
  {
    name: 'Wandern',
    icon: 'tabler:mountain',
    description: 'Insbesondere in den Alpen'
  },
  {
    name: 'Handwerken',
    icon: 'tabler:tools',
    description: 'Haushalt, Motorräder, Autos'
  },
  {
    name: 'Motorrad',
    icon: 'tabler:motorbike',
    description: 'Motorradreisen, soziale Kontakte pflegen'
  }
]
</script>