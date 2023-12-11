<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import type { ListItem } from '@/types/WishListItem'

const { navigation } = useNavigationStore()

defineProps<ListItem>()
</script>

<template>
  <div>
    <ui-button
      v-for="navigationLink of navigation"
      :key="navigationLink.title"
      :icon="navigationLink.icon"
      :title="navigationLink.title" />
    <a href="https://iconify.design/docs/icon-components/vue/dimensions.html">
      библиотека иконок
    </a>
  </div>
</template>
