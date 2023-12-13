<script lang="ts" setup>
import { useContextMenu } from '@/stores/context'
import type { UiContent } from '@/types/main'
import { Icon } from '@iconify/vue'
import { onClickOutside } from '@vueuse/core'
import type { Ref } from 'vue'

const props = defineProps<{
  card: UiContent
  isGift?: boolean
}>()

const onEdit = () => {
  console.log('edit')
}

const onRemove = () => {
  console.log('remove')
}

const context: Ref<HTMLDivElement> = ref()

const contextMenu = useContextMenu()

const isMenuOpen = computed(() => props.card.id === contextMenu.openedId)

onClickOutside(context, () => {
  contextMenu.openedId = null
})
</script>

<template>
  <div
    :class="[
      'bg-background-primary relative z-0 flex flex-col gap-y-10 py-10 items-center drop-shadow hover:drop-shadow-2xl rounded-xl transition',
      { 'z-20': isMenuOpen },
    ]">
    <button
      v-if="isGift"
      ref="context"
      class="absolute right-0 top-0 translate-y-1/2 -translate-x-1/2 hover:bg-background-secondary transition rounded-full"
      @click="contextMenu.openedId = card.id">
      <Icon class="!w-6 !h-6 shrink-0" icon="pepicons-pencil:dots-y" />
    </button>
    <img v-if="card.img" :alt="card.title" :src="card.img" />
    <div v-else class="w-[100px] h-[100px] bg-black rounded-full" />
    <h5 class="font-normal">{{ card.title }}</h5>
    <ui-context-menu
      v-if="isMenuOpen"
      @on-edit="onEdit"
      @on-remove="onRemove" />
  </div>
</template>
