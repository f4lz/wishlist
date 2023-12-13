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
  <ui-wrapper>
    <div class="flex items-center gap-x-3">
      <div class="w-[50px] h-[50px] bg-amber-600 rounded-full"></div>
      <div>
        <h4>Игорь</h4>
        <!-- <div>Друзья: 3</div>
            <div>Подарки: 2</div> -->
      </div>
    </div>

    <h1 class="col-span-2">
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

    <profile-friends v-if="activeTab === 'Друзья'" class="col-span-2" />
    <profile-gifts v-if="activeTab === 'Мои подарки'" class="col-span-2" />
    <profile-settings v-if="activeTab === 'Настройки'" />
  </ui-wrapper>
</template>
