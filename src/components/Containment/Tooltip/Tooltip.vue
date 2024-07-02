<template>
  <span
    ref="targetRef"
    class="target"
    @mouseover="isMouseOver = true"
    @mouseout="isMouseOver = false"
  >
    <slot name="target" />
  </span>

  <Teleport to="body">
    <transition tag="div">
      <div
        v-if="isMouseOver"
        class="tooltip"
        ref="tooltipRef"
        :style="{
          left:
            target.x.value + target.width.value / 2 + tooltip.width.value / 2 >=
            windowWidth // Right marginal condition
              ? windowWidth - tooltip.width.value + `px`
              : target.x.value +
                    target.width.value / 2 -
                    tooltip.width.value / 2 <=
                  0 // Left marginal condition
                ? 0 + `px`
                : target.x.value +
                  target.width.value / 2 -
                  tooltip.width.value / 2 +
                  `px`,
          top: `${target.bottom.value}px`,
          maxWidth: Math.min(windowWidth - 32, MAX_WIDTH) + 'px'
        }"
      >
        <div class="container">
          <slot name="default" />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useElementBounding, useWindowSize } from '@vueuse/core'
import { ref } from 'vue'

const MAX_WIDTH = 420

const targetRef = ref<HTMLElement | null>(null)
const target = useElementBounding(targetRef)

const tooltipRef = ref<HTMLElement | null>(null)
const tooltip = useElementBounding(tooltipRef)

const { width: windowWidth } = useWindowSize()

const isMouseOver = ref(false)
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 100ms;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.target {
  cursor: help;
}

.tooltip {
  position: fixed;

  box-sizing: border-box;
  width: max-content;

  pointer-events: none;

  animation-duration: 0.2s;
  animation-fill-mode: both;

  div.container {
    position: relative;
    margin: 0.5rem;
    padding: 0.5rem;

    background: rgba($color: #000000, $alpha: 0.1);
    border-radius: 0.25rem;
  }
}
</style>
