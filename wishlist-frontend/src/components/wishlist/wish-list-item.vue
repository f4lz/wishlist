<script setup lang="ts">
import type { ListItem } from '@/types/WishListItem'

defineProps<ListItem>()
</script>

<template>
  <div>
    <ui-button title="Настройки" />
    <a href="https://iconify.design/docs/icon-components/vue/dimensions.html">
      библиотека иконок
    </a>
  </div>
</template>
