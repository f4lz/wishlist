import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  const navigation = [
    {
      icon: 'material-symbols:featured-seasonal-and-gifts-rounded',
      title: 'Мои подарки',
      url: '/',
    },
    {
      icon: 'material-symbols:group',
      title: 'Друзья',
      url: '/friends',
    },
    {
      icon: 'material-symbols:settings',
      title: 'Настройки',
      url: '/settings',
    },
  ]

  return { navigation }
})
