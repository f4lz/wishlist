<script lang="ts" setup>
import type { UiContent } from '@/types/main'
import { Icon } from '@iconify/vue'

defineProps<{
  card: UiContent
  isGift?: boolean
}>()
</script>

<template>
  <div
    class="bg-background-primary flex flex-col gap-y-5 px-9 py-7 items-center drop-shadow hover:drop-shadow-2xl rounded-xl transition">
    <button
      v-if="isGift"
      class="absolute right-0 top-0 translate-y-1/2 -translate-x-1/2 hover:bg-background-secondary rounded-full">
      <Icon class="!w-6 !h-6 shrink-0" icon="pepicons-pencil:dots-y" />
    </button>
    <img v-if="card.img" :alt="card.title" :src="card.img" />
    <div v-else class="w-[125px] h-[125px] bg-black rounded-full" />
    <h5 class="font-normal">{{ card.title }}</h5>
  </div>
</template>
