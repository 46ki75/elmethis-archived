<template>
  <div class="container" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="square" :style="{ border: `solid 1px ${color}` }"></div>
    <div
      class="square"
      :style="{ border: `solid 1px ${color}`, animationDelay: '0.4s' }"
    ></div>
  </div>
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

@keyframes turn {
  0% {
    transform: rotate(0deg) rotateY(0deg) scale(0);
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }

  100% {
    transform: rotate(360deg) rotateY(400deg) scale(1);
    opacity: 0;
  }
}

.container {
  position: relative;
}

.square {
  position: absolute;
  width: 100%;
  height: 100%;

  animation-name: turn;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
</style>
