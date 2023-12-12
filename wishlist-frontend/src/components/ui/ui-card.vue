<script lang="ts" setup>
import type { UiContent } from '@/types/main'
import { Icon } from '@iconify/vue'

const isMenuOpen = ref<boolean>(false)

defineProps<{
  card: UiContent
  isGift?: boolean
}>()
</script>

<template>
  <div
    class="bg-background-primary relative flex flex-col gap-y-10 py-10 items-center drop-shadow hover:drop-shadow-2xl rounded-xl transition">
    <button
      v-if="isGift"
      class="absolute right-0 top-0 translate-y-1/2 -translate-x-1/2 hover:bg-background-secondary transition rounded-full"
      @click="isMenuOpen = !isMenuOpen">
      <Icon class="!w-6 !h-6 shrink-0" icon="pepicons-pencil:dots-y" />
    </button>
    <img v-if="card.img" :alt="card.title" :src="card.img" />
    <div v-else class="w-[100px] h-[100px] bg-black rounded-full" />
    <h5 class="font-normal">{{ card.title }}</h5>
  </div>
  <ui-context-menu v-if="isMenuOpen" />
</template>
