import layoutsDetault from '@/components/layouts/layouts-detault.vue'
import pageNotFound from '@/pages/pageNotFound.vue'
import addGift from '@pages/add-gift.vue'
import main from '@pages/main.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layoutsDetault,
      children: [
        {
          path: '/',
          name: 'home',
          component: main,
        },
        {
          path: '/add-gift',
          component: addGift,
          name: 'add-gift',
        },
      ],
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      component: pageNotFound,
    },
  ],
})

export default router
