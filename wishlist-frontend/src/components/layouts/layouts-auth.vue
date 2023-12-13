<template>
  <div class="flex flex-col h-full">
    <the-header class="py-2.5"/>

    <div class="bg-teal-300 h-full w-full">
      <div class="container h-full w-full items-center flex">
        <div class="bg-background-primary w-full drop-shadow-lg rounded-md py-11 px-14 items-start">
        <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
  