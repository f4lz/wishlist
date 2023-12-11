<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

/** TODO:Паддинги потом сделать когда будет лого заместо `h-20` */
<template>
  <div class="container flex justify-between h-20 items-center">
    <router-link to="/">Подножка</router-link>
    <button class="flex gap-x-5 items-center">
      <h5 class="font-normal">Выйти</h5>
      <Icon class="!w-6 !h-6 shrink-0" icon="material-symbols:logout-rounded" />
    </button>
  </div>
</template>
