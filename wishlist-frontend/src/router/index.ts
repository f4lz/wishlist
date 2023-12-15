import layoutsAuth from '@/components/layouts/layouts-auth.vue'
import layoutsDefault from '@/components/layouts/layouts-detault.vue'
import layoutsMenu from '@/components/layouts/layouts-menu.vue'
import pageNotFound from '@/pages/pageNotFound.vue'
import addGift from '@pages/add-gift.vue'
import friends from '@pages/friends.vue'
import login from '@pages/login-page.vue'
import main from '@pages/main.vue'
import registration from '@pages/registration-page.vue'
import settings from '@pages/settings.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layoutsMenu,
      children: [
        {
          path: '/',
          name: 'home',
          component: main,
        },
        {
          path: '/friends',
          component: friends,
          name: 'friends',
        },
        {
          path: '/settings',
          component: settings,
          name: 'settings',
        },
      ],
    },
    {
      path: '/gifts',
      component: layoutsDefault,
      children: [
        {
          path: '/add-gift',
          component: addGift,
          name: 'add-gift',
        },
      ],
    },
    {
      path: '/auth/',
      component: layoutsAuth,
      children: [
        {
          path: 'login',
          component: login,
          name: 'login',
        },
        {
          path: 'registration',
          component: registration,
          name: 'registration',
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
