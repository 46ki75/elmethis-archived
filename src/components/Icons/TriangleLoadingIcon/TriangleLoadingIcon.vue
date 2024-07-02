<template>
  <svg
    :style="{ width: size, height: size }"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
  >
    <polygon
      class="line"
      points="50,10 90,90 10,90"
      fill="transparent"
      :stroke="color"
    />
  </svg>
</template>

<script setup lang="ts">
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
    /**
     * **optional?**
     *
     * Color of the Icon.
     */
    color?: string
  }>(),
  { size: 64, color: 'black' }
)
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

@keyframes line {
  0% {
    stroke-dasharray: 0% 240%;
    stroke-dashoffset: 120%;
  }
  50.1% {
    stroke-dasharray: 240% 0%;
    stroke-dashoffset: 120%;
  }
  50.2% {
    stroke-dasharray: 240% 0%;
    stroke-dashoffset: 240%;
  }
  100% {
    stroke-dasharray: 0% 240%;
    stroke-dashoffset: 120%;
  }
}

.line {
  stroke-width: 1px;
  animation: line 1.2s ease-in-out infinite both;
}
</style>
