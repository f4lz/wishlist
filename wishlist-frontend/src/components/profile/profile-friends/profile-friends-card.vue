<script lang="ts" setup>

defineProps<{
  friend: any
}>()


</script>

<template>
  <div class="bg-background-primary flex flex-col gap-y-5 px-9 py-7 items-center drop-shadow-lg rounded-large">
    <!-- <img :alt="friend.title" :src="friend.img"> -->
    <div class="w-[150px] h-[150px] bg-black rounded-full">

    </div>
    <h5 class="font-normal">{{ friend.title }}</h5>
  </div>
</template>