<script setup lang="ts">
withDefaults(
  defineProps<{
    colsNumber?: 2 | 3 | 4
    isMobileTwoColumns?: boolean
  }>(),
  {
    colsNumber: 3,
  }
)

const colsNumberClasses = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}
</script>

<template>
  <div
    :class="[
      'grid grid-flow-dense auto-rows-max grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-6',
      colsNumberClasses[colsNumber],
      { 'xs:grid-cols-2 xs:gap-1.5 sm:gap-4': isMobileTwoColumns },
    ]">
    <slot />
  </div>
</template>
