<script lang="ts" setup>
import type { UiContent } from '@/types/main';

const gifts: UiContent[] = [
  {
    id: '1212',
    title: "Холодильник",
    img: "hagdahd",
  },
  {
    id: '1212212',
    title: "Аня",
    img: "hagdahd",
  },
  {
    id: '1228712',
    title: "Аня",
    img: "hagdahd",
  },
  {
    id: '121212',
    title: "Аня",
    img: "hagdahd",
  },
  {
    id: '121212111',
    title: "Аня",
    img: "hagdahd",
  },
  {
    id: '121212321322',
    title: "Аня",
    img: "hagdahd",
  },
  
]
</script>

<template>
  <div>
    <ui-grid :cols-number="4">
      <ui-card v-for="gift of gifts" :key="gift.id" :card="gift" is-gift/>
    </ui-grid>
  </div>
</template>