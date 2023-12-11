<script lang="ts" setup>

type Tab =  undefined | 'profile-friends' | 'profile-gifts' | 'profile-settings' 

const activeTab = ref<Tab>(undefined)

function changeTab(selectedTab: Tab) {
  if ( selectedTab === activeTab.value ) {
    activeTab.value = undefined
    return
  }
  activeTab.value = selectedTab
}

</script>

<template>
  <div>
    <button @click="changeTab('profile-friends')">
      Друзья
    </button>
    <button  @click="changeTab('profile-gifts')">
      Настройки
    </button>
    <button  @click="changeTab('profile-settings')">
      Подарки
    </button>

      <profile-friends v-if="activeTab === undefined || activeTab === 'profile-friends'"/>
      <profile-gifts v-if="activeTab === 'profile-gifts'"/>
      <profile-settings v-if="activeTab === 'profile-settings'"/>
  </div>
</template>