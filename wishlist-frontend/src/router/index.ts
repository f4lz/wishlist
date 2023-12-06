import { createRouter, createWebHistory } from 'vue-router'
import main from '@pages/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: main
    },
  ]
})

export default router
