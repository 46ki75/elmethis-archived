<template>
  <div ref="observerElement">
    <div class="progress-bar">
      <div
        class="progress-bar__buffer"
        :style="{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0% 50%, ${themeTemplate[theme].buffer} 50% 100%)`,
          backgroundPositionX: `${-progressWidth}%`
        }"
      >
        a
      </div>
      <div
        class="progress-bar__progress"
        :style="{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0% 50%, ${themeTemplate[theme].progress} 50% 100%)`,
          backgroundPositionX: `${-progressWidth}%`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const themeTemplate = {
  crimson: { progress: '#994b59', buffer: '#d5a8b0' },
  amber: { progress: '#ae5f4f', buffer: '#dfbeb7' },
  gold: { progress: '#a38b50', buffer: '#daceb2' },
  emerald: { progress: '#449763', buffer: '#a0d4b4' },
  blue: { progress: '#4c6da2', buffer: '#aebed9' },
  purple: { progress: '#7e50ab', buffer: '#cab7dd' },
  pink: { progress: '#bb4486', buffer: '#e4b4ce' }
}

const props = withDefaults(
  defineProps<{
    progress: number
    displayPercent: boolean
    theme: keyof typeof themeTemplate
  }>(),
  { displayPercent: false, theme: 'crimson' }
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
