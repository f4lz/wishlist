<script lang="ts" setup>
import { useNavigationStore } from '@/stores/navigation'
import type { Tab } from '@/types/TabItem'

const activeTab = ref<Tab>(undefined)

function changeTab(selectedTab: Tab) {
  activeTab.value = selectedTab
}

const { navigation } = useNavigationStore()


</script>

<template>
  <div>
    
    <div class="flex flex-col gap-y-3 w-96">
    <ui-button
      v-for="navLink of navigation"
      :key="navLink.title"
      :icon="navLink.icon"
      :title="navLink.title" />
  </div>
    
    <!-- <button @click="changeTab('Друзья')">
      Друзья
    </button>
    <button  @click="changeTab('Мои подарки')">
      Подарки
    </button>
    <button  @click="changeTab('Настройки')">
      Настройки
    </button> -->

      <profile-friends v-if="activeTab === undefined || activeTab === 'Друзья'"/>
      <profile-gifts v-if="activeTab === 'Мои подарки'"/>
      <profile-settings v-if="activeTab === 'Настройки'"/>
  </div>
</template>