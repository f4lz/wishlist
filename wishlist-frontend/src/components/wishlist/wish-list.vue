<script setup lang="ts">
import WishListItem from "@components/wishlist/whish-list-item.vue"
import type { ListItem } from '@/types/WishListItem';

const items: ListItem[] = [
  {
    id: 1,
    title: "Машину",
    link: "тут типо ссылка"
  }
]
</script>

<template>
  <div>
    <wish-list-item v-for="item in items" :key="item.id" :title="item.title" :link="item?.link"/>
  </div>
</template>