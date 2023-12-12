<script lang="ts" setup>
import { useNavigationStore } from '@/stores/navigation'
import type { Tab } from '@/types/TabItem'

const activeTab = ref<Tab>('Мои подарки')

function changeTab(selectedTab: Tab) {
  activeTab.value = selectedTab
}

const { navigation } = useNavigationStore()

</script>

<template>
  <div class="container h-full w-full items-center flex">

    <div class="bg-background-primary drop-shadow-lg rounded-large grid grid-cols-3 gap-x-7 py-11 px-14">

          <div class="w-[50px] h-[50px] bg-amber-600 rounded-full">
          </div>

          <h1 class="mb-[65px] col-span-2">
            {{ activeTab }}
          </h1>

        <div class="flex flex-col gap-y-3">
          <ui-button
            v-for="navLink of navigation"
            :key="navLink.title"
            :icon="navLink.icon"
            :is-active="activeTab === navLink.title"
            :title="navLink.title"
            @onclick="changeTab" />
        </div>

      <profile-friends class="col-span-2" v-if="activeTab === 'Друзья'" />
      <profile-gifts v-if="activeTab === 'Мои подарки'"/>
      <profile-settings v-if="activeTab === 'Настройки'"/>

    </div>
  </div>
</template>