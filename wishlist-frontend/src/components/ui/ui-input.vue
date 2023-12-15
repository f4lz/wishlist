<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: string
    placeholder: string
    title: string
    classes?: string
  }>(),
  {
    type: 'text',
  }
)
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <span>{{ title }}</span>
    <input
      class="border border-border"
      :class="classes"
      :placeholder="placeholder"
      :type="type" />
  </div>
</template>
