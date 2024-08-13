<template>
  <div class="container" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="dot" :style="{ background: color }"></div>
    <div
      class="dot"
      :style="{ background: color, animationDelay: '0.1s' }"
    ></div>
    <div
      class="dot"
      :style="{ background: color, animationDelay: '0.2s' }"
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

@keyframes bounce {
  0% {
    transform: translateY(0%) scaleY(0.3) scaleX(1.5);
  }

  10% {
    transform: scaleY(0.8) scaleX(1.2);
  }

  100% {
    transform: translateY(-400%) scaleY(1.1);
  }
}

.container {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.dot {
  width: 20%;
  height: 20%;
  border-radius: 50%;

  animation-name: bounce;
  animation-duration: 0.4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-out;
}
</style>
