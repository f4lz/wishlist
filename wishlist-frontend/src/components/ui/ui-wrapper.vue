<script setup lang="ts"></script>

<template>
  <div class="container h-full w-full items-center flex">
    <div
      class="bg-background-primary w-full drop-shadow-lg rounded-md flex lg:flex-row flex-col gap-x-7 gap-y-16 py-11 px-14 items-start">
      <slot />
    </div>
  </div>
</template>
