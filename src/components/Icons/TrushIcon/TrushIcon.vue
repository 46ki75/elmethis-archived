<template>
  <object
    :style="{ width: `${size}px` }"
    type="image/svg+xml"
    :data="svgPath"
  ></object>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

withDefaults(
  defineProps<{
    /**
     * **optional?**
     *
     * Size of the Icon.
     */
    size?: number
  }>(),
  { size: 64 }
)

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

const svgPath = computed(
  () => new URL('@/assets/trush.svg', import.meta.url).href
)
</script>

<style scoped lang="scss"></style>
