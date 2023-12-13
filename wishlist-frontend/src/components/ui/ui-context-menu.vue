<script lang="ts" setup>
const emit = defineEmits(['onRemove', 'onEdit'])
</script>

<template>
  <div
    class="absolute z-30 bg-background-primary translate-x-1/2 rounded py-2.5 px-3.5 drop-shadow-xl w-48">
    <button class="hover:opacity-80 transition" @click="emit('onEdit')">
      Редактировать
    </button>

    <div class="w-full h-[1px] bg-border" />

    <button
      class="text-error hover:opacity-80 transition"
      @click="emit('onRemove')">
      Удалить
    </button>
  </div>
</template>
