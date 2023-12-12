<script lang="ts" setup>
import type { UiContent } from '@/types/main'

const friends: UiContent[] = [
  {
    id: '1212',
    title: 'Вика',
  },
  {
    id: '12212',
    title: 'Аня',
  },
  {
    id: '12122',
    title: 'Катя',
  },
  {
    id: '12132',
    title: 'Игорь',
  },
  {
    id: '12412',
    title: 'Игорь',
  },
  {
    id: '12152',
    title: 'Игорь',
  },
]
</script>

<template>
  <div>
    <ui-grid :colsNumber="3">
      <ui-card v-for="friend of friends" :key="friend.id" :card="friend" />
    </ui-grid>
  </div>
</template>
