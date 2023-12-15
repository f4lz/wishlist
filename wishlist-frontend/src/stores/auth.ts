import { defineStore } from 'pinia'

export const useAuthStore = defineStore('navigation', () => {
  const auhtStore = () => {
    const auth = true

    return { auth }
  }

  return { auhtStore }
})
