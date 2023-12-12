<script lang="ts" setup>
const friends: any[] = [
  {
    id: '1212',
    title: "Вика",
    img: "hagdahd",
  },
  {
    id: '12212',
    title: "Аня",
    img: "hagdahd",
  },
  {
    id: '12122',
    title: "Катя",
    img: "hagdahd",
  },
  {
    id: '12132',
    title: "Игорь",
    img: "hagdahd",
  },
  {
    id: '12412',
    title: "Игорь",
    img: "hagdahd",
  },
  {
    id: '12152',
    title: "Игорь",
    img: "hagdahd",
  },
]
</script>

<template>
  <div>
    <ui-grid :cols-number="4">
      <profile-friends-card v-for="friend of friends" :key="friend.id" :friend="friend"/>
    </ui-grid>
  </div>
</template>
