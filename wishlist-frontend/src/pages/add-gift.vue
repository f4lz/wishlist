<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div @click="router.back()">
    Это страница где ты делаешь хотелку кликни, чтобы вернуться назад
  </div>
</template>
