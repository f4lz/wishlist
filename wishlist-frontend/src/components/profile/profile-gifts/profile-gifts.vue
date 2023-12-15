<script lang="ts" setup>
import type { UiContent } from '@/types/main'
import { Icon } from '@iconify/vue'

const gifts: UiContent[] = [
  {
    id: 1212,
    title: 'Холодильник',
  },
  {
    id: 1212212,
    title: 'Шаурман',
  },
  {
    id: 1228712,
    title: 'Телевизор',
  },
  {
    id: 121212,
    title: 'Валына',
  },
  {
    id: 121212111,
    title: 'Шарф',
  },
]
</script>

<template>
  <ui-content-wrapper title="Мои подарки">
    <ui-grid>
      <router-link
        class="bg-background-primary flex flex-col justify-center items-center drop-shadow hover:drop-shadow-2xl rounded-3xl transition"
        to="/add-gift">
        <Icon class="!w-10 !h-10 shrink-0" icon="material-symbols:add-circle" />
        <p>Добавить подарок</p>
      </router-link>
      <ui-card v-for="gift of gifts" :key="gift.id" :card="gift" is-gift />
    </ui-grid>
  </ui-content-wrapper>
</template>
