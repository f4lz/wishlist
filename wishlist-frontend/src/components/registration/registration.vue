<script lang="ts" setup></script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center flex-col gap-y-6">
      <h3 class="">Регистрация</h3>
      <div class="flex flex-col gap-y-2">
        <div class="flex flex-col gap-y-1">
          <span>Имя</span>
          <input placeholder="введите имя" type="text" />
        </div>

        <div class="flex flex-col gap-y-1">
          <span>Почта</span>
          <input placeholder="введите почту" type="text" />
        </div>

        <div class="flex flex-col gap-y-1">
          <span>Пароль</span>
          <input placeholder="введите пароль" type="text" />
        </div>
        <div class="flex justify-center">
          <button class="button">Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>
