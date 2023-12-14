<script lang="ts" setup></script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center flex-col">
      <h2 class="">Логин</h2>
      <div class="flex flex-col gap-y-2 mt-9">
        <div class="flex flex-col gap-y-1">
          <label for="password">Пароль</label>
          <input placeholder="Введите пароль" type="text" />
        </div>

        <div class="flex flex-col gap-y-1">
          <label for="email">Почта</label>
          <input placeholder="Введите почту" type="text" />
        </div>
        <div class="flex justify-center py-2">
          <button class="button-primary px-6 py-1" type="submit">Войти</button>
        </div>
      </div>
      <div>
        <span>Нет аккаунта?</span>
        <router-link class="button text-accent" to="/auth/registration">Зарегистрироваться </router-link>
      </div>
    </div>
  </div>
</template>
