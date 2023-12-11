<script setup lang="ts">
import type { ListItem } from '@/types/WishListItem'

const items: ListItem[] = [
  {
    id: 1,
    title: 'Машину',
    link: 'Ссылка на товар',
  },
]
</script>

<template>
  <wish-list-item
    v-for="item in items"
    :key="item.id"
    :link="item?.link"
    :title="item.title" />
</template>

<!-- {
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "none",
  "html.format.wrapLineLength": 100,
  "html.format.wrapAttributes": "force-expand-multiline"
} -->
