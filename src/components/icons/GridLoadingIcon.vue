<template>
  <svg
    :style="{ width: size, height: size }"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
    css="{svgStyle(size)}"
  >
    <rect
      :style="{ animationDelay: '0s' }"
      class="rect"
      width="20"
      height="20"
      x="10"
      y="10"
      :fill="color"
      stroke="transparent"
    />

    <rect
      :style="{ animationDelay: '0.1s' }"
      class="rect"
      width="20"
      height="20"
      x="40"
      y="10"
      :fill="color"
      stroke="transparent"
    />

    <rect
      :style="{ animationDelay: '0.2s' }"
      class="rect"
      width="20"
      height="20"
      x="70"
      y="10"
      :fill="color"
      stroke="transparent"
    />

    <rect
      :style="{ animationDelay: '0.7s' }"
      class="rect"
      width="20"
      height="20"
      x="10"
      y="40"
      :fill="color"
      stroke="transparent"
    />

    <rect
      width="20"
      height="20"
      x="40"
      y="40"
      :fill="color"
      stroke="transparent"
    />

    <rect
      :style="{ animationDelay: '0.3s' }"
      class="rect"
      width="20"
      height="20"
      x="70"
      y="40"
      :fill="color"
      stroke="transparent"
    />

    <rect
      :style="{ animationDelay: '0.6s' }"
      class="rect"
      width="20"
      height="20"
      x="10"
      y="70"
      :fill="color"
      stroke="transparent"
    />

    <rect
      :style="{ animationDelay: '0.5s' }"
      class="rect"
      width="20"
      height="20"
      x="40"
      y="70"
      :fill="color"
      stroke="transparent"
    />

    <rect
      :style="{ animationDelay: '0.4s' }"
      class="rect"
      width="20"
      height="20"
      x="70"
      y="70"
      :fill="color"
      stroke="transparent"
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
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.rect {
  animation-name: blink;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
</style>
