<script lang="ts" setup></script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center flex-col gap-y-6">
      <h3 class="">Регистрация</h3>
      <form class="flex flex-col gap-y-5">
        <div class="flex flex-col">
          <label for="email">Почта</label>
          <input  
            placeholder="Введите почту" 
            type="email"
            v-model.trim="email"
          />
        </div>
        <div class="flex flex-col">
          <label for="password">Пароль</label>
          <input 
            placeholder="Введите пароль"
            type="password"
            v-model.trim="password"
          />
        </div>
        <div class="flex flex-col">
          <label>Имя</label>
          <input 
            placeholder="Введите имя"
            type="text"
            />
        </div>
        <div class="flex justify-center mt-3">
          <button class="button-primary px-6 py-2" >Зарегистрироваться</button>
        </div>
      </form>
    </div>
  </div>
</template>


<!-- import { ref } from 'vue'
import { validationMixin } from 'vuelidate'
const mixin: Array = ref([]),
const login: string = ref(''),
const password: string = ref(''), -->