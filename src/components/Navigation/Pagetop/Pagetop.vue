<template>
  <div
    ref="el"
    class="container"
    :style="{
      [position]: '8px',
      transform: isVisible
        ? 'translateY(0px) rotate(180deg)'
        : 'translateY(100px) rotate(-180deg)'
    }"
    @click="toTop"
  >
    <div class="chevron"></div>
    <div class="chevron"></div>
    <div class="chevron"></div>
  </div>
  <span class="text" :style="{ [position]: '8px', opacity: isVisible ? 1 : 0 }"
    >Back to Top</span
  >
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { throttle } from 'lodash-es'

withDefaults(
  defineProps<{
    /**
     * **optional?**
     *
     * The position of the page top link. You can choose between the bottom right or bottom left.
     */
    position?: 'right' | 'left'
  }>(),
  { position: 'right' }
)

const isVisible = ref<boolean>(false)

const scrollTop = ref(0)

const toTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  const updateScroll = throttle((_: Event) => {
    const newScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop.value !== newScrollTop) {
      scrollTop.value = newScrollTop
    }
  }, 500) as (this: Window, ev: Event) => void

  window.addEventListener('scroll', updateScroll)

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateScroll)
  })
})

watch(scrollTop, (newOffset) => {
  const shouldBeVisible = newOffset > 50
  if (isVisible.value !== shouldBeVisible) {
    isVisible.value = shouldBeVisible
  }
})
</script>

<style scoped lang="scss">
@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(20px);
  }
  67% {
    opacity: 1;
    transform: translateY(50px);
  }
  100% {
    opacity: 0;
    transform: translateY(65px) scale3d(0.5, 0.5, 0.5);
  }
}

.container {
  -webkit-tap-highlight-color: transparent;
  position: fixed;
  bottom: 8px;
  width: 56px;
  height: 56px;
  cursor: pointer;
  transition: all 0.7s;
  transform-origin: center;
}

.chevron {
  position: absolute;
  width: 56px;
  height: 16px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;

  &:nth-of-type(1) {
    animation: move 3s ease-out 1s infinite;
  }

  &:nth-of-type(2) {
    animation: move 3s ease-out 2s infinite;
  }

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: rgb(31, 89, 122);
  }

  &:before {
    border-radius: 0 0 3px 0;
    left: 0px;
    transform: skew(0deg, 30deg);
  }

  &:after {
    border-radius: 0 0 0 3px;
    right: 0px;
    width: 51%;
    transform: skew(0deg, -30deg);
  }
}

.text {
  font-family: sans-serif;
  position: fixed;
  z-index: 50;
  bottom: 1px;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease-out 0.5s;
  user-select: none;
}
</style>
