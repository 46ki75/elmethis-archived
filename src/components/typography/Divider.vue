<template>
  <AnimateInView>
    <hr :style="{ opacity: 0, height: 1, margin: 0, padding: 0 }" />
    <div class="wrapper" :style="{ marginBottom: margin ?? 0 }">
      <div class="dot" :style="{ backgroundColor: color }"></div>
      <div class="line" :style="{ backgroundColor: color }"></div>

      <div
        v-if="text != null"
        class="dot"
        :style="{ backgroundColor: color }"
      ></div>
      <span v-if="text != null" class="text" :style="{ color }">{{
        text
      }}</span>
      <div
        v-if="text != null"
        class="dot"
        :style="{ backgroundColor: color }"
      ></div>

      <div class="line" :style="{ backgroundColor: color }"></div>
      <div class="dot" :style="{ backgroundColor: color }"></div>
    </div>
  </AnimateInView>
</template>

<script setup lang="ts">
import AnimateInView from '../utils/AnimateInView.vue'

withDefaults(
  defineProps<{
    text?: string
    /**
     * **optional?**
     *
     * This is the margin on the bottom side of the element.
     * If not specified, it defaults to 0.
     */
    margin?: string
    /**
     * **optional?**
     *
     * Color of the Icon.
     */
    color?: string
  }>(),
  { color: 'rgba(0, 0, 0, 0.25)' }
)
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    transition: all 0.4s;
  }
}

.dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.25);
}

@keyframes drawline {
  from {
    max-width: 0%;
  }
  to {
    max-width: 50%;
  }
}

.line {
  height: 1px;
  background-color: rgba(0, 0, 0, 0.25);

  flex-grow: 1;

  animation-name: drawline;
  animation-duration: 1.2s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}

.text {
  font-family: sans-serif;
  font-size: 0.75rem;
  margin: 0 1rem;
  line-height: 0.75rem;
  color: rgba(0, 0, 0, 0.35);
  text-align: center;

  &::selection {
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
