<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation'
import type { ListItem } from '@/types/WishListItem'

const { navigation } = useNavigationStore()

defineProps<ListItem>()
</script>

<template>
  <div class="flex flex-col gap-y-3 w-96">
    <ui-button
      v-for="navLink of navigation"
      :key="navLink.title"
      :icon="navLink.icon"
      :title="navLink.title" />
  </div>
</template>
