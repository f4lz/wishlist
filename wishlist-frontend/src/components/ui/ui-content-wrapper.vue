<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="w-full flex flex-col gap-y-[60px]">
    <h1>
      {{ title }}
    </h1>
    <slot />
  </div>
</template>
