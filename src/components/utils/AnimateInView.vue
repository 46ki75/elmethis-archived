<template>
  <div ref="observerElement" style="display: inline">
    <div :key="renderKey" style="display: inline">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const renderKey = ref(0)
const observerElement = ref<HTMLElement | null>(null)

const observerCallback: IntersectionObserverCallback = (entries, _) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) renderKey.value++
  })
}

// IntersectionObserverのインスタンスを作成
const observer = new IntersectionObserver(observerCallback, {
  root: null, // ビューポートをルートとして使用
  rootMargin: '100px',
  threshold: 0 // 対象が10%ビューポートに入ったらトリガー
})

onMounted(() => {
  if (observerElement.value) {
    observer.observe(observerElement.value)
  }
})

onUnmounted(() => {
  if (observerElement.value) {
    observer.unobserve(observerElement.value)
  }
})
</script>
