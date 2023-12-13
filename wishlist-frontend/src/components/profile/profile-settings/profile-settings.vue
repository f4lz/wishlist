<script lang="ts" setup></script>

<template>
  <div class="flex gap-7">
    <div class="flex flex-col align-center w-2/4 gap-y-4">
      <div class="w-[150px] h-[150px] bg-black rounded-full"></div>
      <input class="text-[18px] border-1 rounded px-0 "  type="file">
    </div>
    <div class="flex flex-col gap-y-16">
      <div>
        <span>Изменить имя</span>
        <input class="w-[465px] h-[39px] border border-black" placeholder="введите имя" type="text"/>
      </div>
      <div>
        <span>Новый пароль</span>
        <input class="w-[465px] h-[39px] border border-black" placeholder="введите пароль" type="text"/>
    </div>
    </div>
  </div>
</template>
