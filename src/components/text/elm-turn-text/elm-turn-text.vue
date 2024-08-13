<template>
  <div class="container">
    <div class="text">
      <span
        v-for="(char, index) in text.split('')"
        :key="index"
        :style="{
          fontSize: `${size}px`,
          color,
          animationDelay: `${index * 0.06}s`,
          animationDuration: `${0.06 * text.split('').length + 0.4}s`
        }"
        >{{ char.replace(' ', '&nbsp;') }}</span
      >
    </div>
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
    /**
     * **required!**
     */
    text: string
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

@keyframes move {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}

@keyframes blink {
  0% {
    transform: rotateY(180deg);
  }

  70% {
    transform: rotateY(360deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

.container {
  display: flex;
  flex-direction: column;
  width: min-content;

  .text {
    font-size: 1rem;
    font-family: sans-serif;

    display: flex;
    flex-direction: row;

    span {
      user-select: none;
      display: block;

      animation-name: blink;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-fill-mode: both;
    }
  }
}
</style>
