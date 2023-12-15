<template>
  <div class="flex flex-col h-full">
    <the-header class="py-2.5" />

    <div class="main grow bg-[#b6b4cf]">
      <div class="container h-full w-full items-center flex">
        <div
          class="bg-background-primary w-full drop-shadow-lg rounded-md flex lg:flex-row flex-col gap-x-7 gap-y-16 py-11 px-14 items-start">
          <sidebar />
          <router-view v-slot="{ Component }">
            <transition mode="out-in" name="route">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateY(-40px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
