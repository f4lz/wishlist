<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{ title: string }>()
</script>

<template>
  <button class="button">
    <Icon class="w-6 grow shrink-0" icon="mdi-light:home" />
    <p class="text-2xl">{{ title }}</p>
  </button>
</template>
