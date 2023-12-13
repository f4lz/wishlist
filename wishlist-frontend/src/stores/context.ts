import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useContextMenu = defineStore('context', () => {
  const openedId: Ref<null | number> = ref(null)

  return { openedId }
})
