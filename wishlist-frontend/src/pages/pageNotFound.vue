<script lang="ts">
export default {
    name: 'PageNotFound',
}
</script>

<template>
<!-- bg-background-secondary -->
    <div class="bg-indigo-600 w-screen  h-full flex justify-center items-center">
        <div class="flex flex-col items-center gap-3 text-white">
            <h3>Ошибка</h3>
            <h2>404</h2>
            <h2>Старница не найдена</h2>
            <router-link
                to="/"
                class="button"
                >
                Вернуться на главную страницу
            </router-link>
        </div>
    </div>
</template>

