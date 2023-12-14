<script setup lang="ts">
import { Icon } from '@iconify/vue';
const router = useRouter()
</script>

<template>
  <ui-wrapper class="grid grid-cols-1">
    <!-- Это страница где ты делаешь хотелку кликни, чтобы вернуться назад -->
    <div class="cursor-zoom-in" @click="router.back()">
      <Icon icon="ep:back" /> Назад
    </div> 
    <from>
        <div class="flex flex-col bg-background-secondary p-2 rounded-xl border-dashed border-2 border-primary">
          <input accept=".jpeg,.jpg,.svg,.svg+xml,.png,.webp"  name="image" type="file">
          <span>Добавьте изображение</span>
          <span>Изображение должно быть высокого качества в формате .jpg, .webp, .svg или .png</span>
        </div>
        <button class="button-primary px-10 my-3 bg-accent ">Добавить</button>
    </from>
    <form action="">
      <input placeholder="Gift name" type="text">
      <input placeholder="URL" type="url">
      <input placeholder="URL" type="url image">
    </form>
  </ui-wrapper>
</template>

