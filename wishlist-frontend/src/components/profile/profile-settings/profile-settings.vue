<script lang="ts" setup></script>

<template>
  <ui-content-wrapper title="Настройки">
    <div class="flex h-96 flex-wrap gap-x-8">
      <div class="flex flex-col align-center gap-y-6">
        <div class="w-[150px] h-[150px] bg-black rounded-full"></div>
        <div
          class="border rounded-full py-1 px-4 bg-accent text-background-primary hover:opacity-80 transition-opacity w-full relative my-[15px] text-center">
          <input
            id="input__file"
            class="opacity-0 absolute invisible"
            name="file"
            type="file" />
          <label class="text-base" for="input__file">Изменить</label>
        </div>
      </div>
      <div class="flex flex-col gap-y-6">
        <ui-input
          classes="xl:w-[364px]"
          placeholder="Введите имя"
          title="Имя" />
        <ui-input
          classes="xl:w-[364px]"
          placeholder="Введите пароль"
          title="Пароль"
          type="password" />
      </div>
    </div>
  </ui-content-wrapper>
</template>
