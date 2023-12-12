<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  title: string
  icon: string
  isActive: boolean
}>()

const emit = defineEmits<{
  onclick: [title: string]
}>()

</script>

<template>
  <button :class="['button', {'text-primary':isActive }]" @click="emit('onclick', title)">
    <Icon class="!w-6 !h-6 shrink-0" :icon="icon" />
    <p class="text-ml">{{ title }}</p>
  </button>
</template>