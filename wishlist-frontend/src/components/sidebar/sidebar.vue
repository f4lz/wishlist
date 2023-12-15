<script lang="ts" setup>
import { useNavigationStore } from '@/stores/navigation'

const { navigation } = useNavigationStore()

const route = useRoute()
</script>

<template>
  <div class="xl:w-1/3 w-full flex flex-col gap-y-[60px]">
    <div class="flex items-center gap-x-3">
      <div class="w-[50px] h-[50px] bg-amber-600 rounded-full" />
      <h4>Игорь</h4>
    </div>

    <div class="flex flex-col gap-y-3">
      <router-link
        v-for="navLink of navigation"
        :key="navLink.title"
        :to="navLink.url">
        <ui-button
          :icon="navLink.icon"
          :is-active="route.path === navLink.url"
          :title="navLink.title" />
      </router-link>
    </div>
  </div>
</template>
