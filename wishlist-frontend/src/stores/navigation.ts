import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  const navigation = [
    {
      icon: 'material-symbols:featured-seasonal-and-gifts-rounded',
      title: 'Мои подарки',
    },
    {
      icon: 'material-symbols:group',
      title: 'Друзья',
    },
    {
      icon: 'material-symbols:settings',
      title: 'Настройки',
    },
  ]

  return { navigation }
})
