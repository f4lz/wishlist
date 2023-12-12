<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="container flex justify-between items-center">
    <router-link to="/"><img alt="Подножка" src="@/assets/icon/Logo.svg"></router-link>
    <button class="flex gap-x-5 items-center">
      <h5 class="font-normal">Выйти</h5>
      <Icon class="!w-6 !h-6 shrink-0" icon="material-symbols:logout-rounded" />
    </button>
  </div>
</template>
