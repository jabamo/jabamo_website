<template>
  <a
      :href="href"
      :target="isExternal ? '_blank' : undefined"
      :rel="isExternal ? 'noopener noreferrer' : undefined"
      :class="[
      'inline-flex items-center gap-2 transition-all duration-200 font-medium group',
      linkStyles
    ]"
  >
    <!-- Icon -->
    <Icon
        v-if="showIcon"
        :name="iconName"
        :class="iconStyles"
        size="16"
    />

    <!-- Link Text -->
    <span class="leading-tight relative">
      <slot />
      <!-- Underline Animation -->
      <span
          v-if="variant === 'underline'"
          class="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
      />
    </span>
  </a>
</template>

<script lang="ts" setup>
interface Props {
  href: string
  variant?: 'default' | 'button' | 'underline' | 'minimal'
  icon?: string
  hideIcon?: boolean
  color?: 'blue' | 'green' | 'purple' | 'gray'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  color: 'blue',
  icon: ''
})

const isExternal = computed(() => {
  return props.href.startsWith('http') || props.href.startsWith('mailto:') || props.href.startsWith('tel:')
})

const showIcon = computed(() => !props.hideIcon)
const iconName = computed(() => {
  if (props.icon) return props.icon
  if (isExternal.value) return 'tabler:external-link'
  return 'tabler:link'
})

const linkStyles = computed(() => {
  const colorClasses = {
    blue: {
      text: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
      bg: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30',
      border: 'border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600',
      focus: 'focus:ring-blue-500'
    },
    green: {
      text: 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300',
      bg: 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30',
      border: 'border-green-200 dark:border-green-700 hover:border-green-300 dark:hover:border-green-600',
      focus: 'focus:ring-green-500'
    },
    purple: {
      text: 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300',
      bg: 'bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30',
      border: 'border-purple-200 dark:border-purple-700 hover:border-purple-300 dark:hover:border-purple-600',
      focus: 'focus:ring-purple-500'
    },
    gray: {
      text: 'text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
      bg: 'bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/30',
      border: 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600',
      focus: 'focus:ring-gray-500'
    }
  }

  const colors = colorClasses[props.color]

  switch (props.variant) {
    case 'button':
      return [
        colors.text,
        colors.bg,
        `px-3 py-2 rounded-lg border ${colors.border}`,
        'hover:shadow-sm hover:scale-105',
        `focus:outline-none focus:ring-2 ${colors.focus} focus:ring-offset-2 dark:focus:ring-offset-gray-800`
      ].join(' ')

    case 'underline':
      return [
        colors.text,
        'hover:bg-transparent',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 rounded'
      ].join(' ')

    case 'minimal':
      return [
        colors.text,
        'hover:underline',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 rounded'
      ].join(' ')

    default:
      return [
        colors.text,
        colors.bg,
        `px-2 py-1 rounded-md border ${colors.border}`,
        'hover:shadow-sm',
        `focus:outline-none focus:ring-2 ${colors.focus} focus:ring-offset-2 dark:focus:ring-offset-gray-800`
      ].join(' ')
  }
})

const iconStyles = computed(() => {
  const colorClasses = {
    blue: 'text-blue-500 dark:text-blue-400',
    green: 'text-green-500 dark:text-green-400',
    purple: 'text-purple-500 dark:text-purple-400',
    gray: 'text-gray-500 dark:text-gray-400'
  }

  return `${colorClasses[props.color]} flex-shrink-0`
})
</script>