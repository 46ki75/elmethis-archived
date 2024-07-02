<template>
  <div ref="observerElement">
    <div
      class="progress-bar"
      :style="{
        height: `${weight}px`,
        borderRadius: `${weight / 2}px`
      }"
    >
      <div
        v-if="!isLoading"
        class="buffer"
        :style="{
          height: `${weight}px`,
          background: rgba(color, 0.3),
          transform: `scaleX(${targetIsVisible ? progress : 0}%)`
        }"
      ></div>

      <div
        v-if="!isLoading"
        class="progress"
        :style="{
          height: `${weight}px`,
          background: color,
          transform: `scaleX(${targetIsVisible ? progress : 0}%)`
        }"
      ></div>

      <div
        v-if="isLoading"
        class="loading"
        :style="{
          height: `${weight}px`,
          background: `linear-gradient(to right, ${color} 0%, ${rgba(color, 0.3)} 0% 50%, ${color} 50% 100%)`,
          backgroundSize: `200% 100%`
        }"
      ></div>
    </div>
    <div v-if="displayPercent" class="indicator">{{ progress }}%</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { rgba } from 'polished'

const props = withDefaults(
  defineProps<{
    /**
     * **optional?** default: 6
     *
     * Specify the thickness of the progress bar.
     */
    weight: number
    /**
     * **required!**
     *
     * Specify the progress in percentage.
     */
    progress: number
    /**
     * **optional?** default: false
     *
     * Specify whether to display in percentage with a boolean value.
     */
    displayPercent: boolean
    /**
     * **optional?** default: 'black'
     *
     * Specify the color of the progress bar.
     * The color of the buffer will be automatically diluted using `polished` color.
     */
    color: string
    /**
     * **optional?** default: false
     *
     * Display a loading animation.
     */
    isLoading: boolean
  }>(),
  { weight: 6, displayPercent: false, color: 'black', isLoading: false }
)

const progressWidth = ref(0)

onMounted(() => {
  setTimeout(() => {
    progressWidth.value = props.progress
  })
})

const observerElement = ref<HTMLElement | null>(null)
const targetIsVisible = useElementVisibility(observerElement)

watch(targetIsVisible, (isVisible) => {
  if (!isVisible) {
    progressWidth.value = 0
  } else {
    progressWidth.value = props.progress
  }
})

watch(props, () => {
  progressWidth.value = props.progress
})
</script>

<style lang="scss" scoped>
@keyframes loading {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.progress-bar {
  position: relative;
  background-color: rgba($color: #868686, $alpha: 0.25);
  overflow: hidden;

  transition: all 0.2s;

  .buffer {
    z-index: 1;
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    transform-origin: 0% 0%;
    transition: transform 400ms;
  }

  .progress {
    z-index: 2;
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    transform-origin: 0% 0%;
    transition: transform 1600ms;
  }

  .loading {
    z-index: 1;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;

    animation-name: loading;
    animation-duration: 1200ms;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }
}

.indicator {
  width: 100%;
  margin-top: 0.25rem;
  text-align: right;
  width: 100%;
  font-size: 0.75rem;
}
</style>
