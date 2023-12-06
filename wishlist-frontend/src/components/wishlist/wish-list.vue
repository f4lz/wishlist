<script setup lang="ts">
import type { ListItem } from '@/types/WishListItem';

const items: ListItem[] = [
  {
    id: 1,
    title: 'Машину',
    link: 'тут типо ссылка'
  }
]
</script>

<template>
  <div>
    <wish-list-item v-for="item in items" :key="item.id" :link="item?.link" :title="item.title"/>
  </div>
</template>
