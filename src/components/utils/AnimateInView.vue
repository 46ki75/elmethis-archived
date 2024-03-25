<template>
  <div ref="observerElement" style="display: inline">
    <div :key="renderKey" style="display: inline; vertical-align: top">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const renderKey = ref(0)
const observerElement = ref<HTMLElement | null>(null)
const targetIsVisible = useElementVisibility(observerElement)

watch(targetIsVisible, () => {
  if (targetIsVisible.value) renderKey.value++
})
</script>
