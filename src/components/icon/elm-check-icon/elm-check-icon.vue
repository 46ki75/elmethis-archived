<template>
  <RerenderInView>
    <svg
      :style="{ width: size, height: size }"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle
        class="circle"
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        :stroke="color"
        strokeWidth="7"
        strokeDasharray="283"
        strokeDashoffset="283"
      />

      <polyline
        class="line"
        points="25,45 50,70 100,20"
        :stroke="color"
        style="stroke-width: 0.4rem"
        fill="transparent"
      />
    </svg>
  </RerenderInView>
</template>

<script setup lang="ts">
import RerenderInView from '../../utils/elm-rerender-inview/elm-rerender-inview.vue'

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
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

.circle {
  stroke-width: 0.4rem;
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  animation:
    line 0.6s ease-in-out both,
    rotate 0.6s linear both;
  transform-origin: center;
}

@keyframes polyline {
  to {
    stroke-dashoffset: 0;
  }
}

.line {
  stroke-width: 0.4rem;
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  animation: line 0.6s ease-in-out both 0.3s;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
}
</style>
