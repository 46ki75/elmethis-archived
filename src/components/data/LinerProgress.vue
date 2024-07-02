<template>
  <div ref="observerElement">
    <div class="progress-bar">
      <div
        class="progress-bar__buffer"
        :style="{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0% 50%, ${rgba(color, 0.35)} 50% 100%)`,
          backgroundPositionX: `${-progressWidth}%`
        }"
      >
        a
      </div>
      <div
        class="progress-bar__progress"
        :style="{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0% 50%, ${color} 50% 100%)`,
          backgroundPositionX: `${-progressWidth}%`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { rgba } from 'polished'

const props = withDefaults(
  defineProps<{
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
  }>(),
  { displayPercent: false, color: 'black' }
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
.progress-bar {
  position: relative;
  height: 0.25rem;
  background-color: rgba($color: #868686, $alpha: 0.25);
  border-radius: 10px;
  overflow: hidden;

  transition: all 0.2s;
  &__buffer {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 200% 100%;
    background-position: -0% 0;

    opacity: 0.5;

    transition: all 0.02s;
  }

  &__progress {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 200% 100%;
    background-position: -0% 0;

    transition: all 1.6s;
  }
}
</style>
