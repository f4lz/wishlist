<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  title: string
  icon: string
}>()
</script>

<template>
  <button class="button">
    <Icon class="!w-6 !h-6 shrink-0" :icon="icon" />
    <p class="text-2xl">{{ title }}</p>
  </button>
</template>
