<template name="InfoIcon">
  <svg
    :style="{ height: size + 'px', width: size + 'px' }"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    css="svgStyle(size)"
  >
    <polyline
      class="polyline"
      points="8,50 20,50 25,30 35,70 40,10, 50,90 55,40 60,60 65,45 70,55 80,50 92,50"
      fill="transparent"
      stroke="black"
      strokeWidth="2"
    />
    <circle
      :style="{ animationDelay: '0s' }"
      class="circle"
      cx="4"
      cy="50"
      r="4"
      fill="black"
    />
    <circle
      :style="{ animationDelay: '0.6s' }"
      class="circle"
      cx="96"
      cy="50"
      r="4"
      fill="black"
    />
  </svg>
</template>

<script setup lang="ts">
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
</script>

<style lang="scss" scoped>
@keyframes drawPolyine {
  0% {
    stroke-dashoffset: 0%;
  }
  100% {
    stroke-dashoffset: -800%;
  }
}

.polyline {
  stroke-dasharray: 400%;
  animation: drawPolyine 1.2s ease-out infinite both;
  transform-origin: center;
}

@keyframes drawCircle {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.circle {
  animation-name: drawCircle;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
</style>
