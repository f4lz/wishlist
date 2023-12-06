<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { ListItem } from '@/types/WishListItem';

defineProps<ListItem>()

</script>

<template>
  <div>
    <p>
      Тут должна быть карточка с пожеланием человека {{ title }}
    </p>
    <p>
      {{ link }}
    </p>
    <div style="display: flex; align-items: center;">
      <a href="https://iconify.design/docs/icon-components/vue/dimensions.html">библиотека иконок</a>
      <Icon icon="mdi-light:home" />
    </div>
  </div>
</template>