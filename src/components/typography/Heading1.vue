<template>
  <AnimateInView>
    <h1
      class="h1"
      :style="{
        fontSize: typeof size === 'string' ? size : size + 'px',
        marginBottom: margin ?? 0
      }"
      :id="content"
    >
      <span class="text">{{ content }}</span>
    </h1></AnimateInView
  >
</template>

<script setup lang="ts">
import AnimateInView from '../utils/AnimateInView.vue'

withDefaults(
  defineProps<{
    content: string
    size?: number | string
    /**
     * **optional?**
     *
     * This is the margin on the bottom side of the element.
     * If not specified, it defaults to 0.
     */
    margin?: string
  }>(),
  { size: '1.5rem' }
)
</script>

<style scoped lang="scss">
.h1 {
  font-family: sans-serif;
  position: relative;
  display: block;
  padding: 0.3em 0.3em 0.3em 0.8em;
  border-width: 1px;
  border-style: solid;
  border-color: #b38a71;
  font-weight: bold;
  color: #4b3737;

  &::before,
  &::after {
    position: absolute;
    width: 12px;
    height: 12px;
    content: '';
    border-width: 1px 0 0 1px;
    border-style: solid;
    border-color: #b38a71;
  }

  &::before {
    top: 3px;
    left: 3px;
  }

  &::after {
    right: 3px;
    bottom: 3px;
    transform: scale(-1, -1);
  }
}

@keyframes text {
  0% {
    background-position: 0% 0;
    color: rgba(0, 0, 0, 1);
  }
  40% {
    background-position: 50% 0;
    color: rgba(64, 64, 64, 1);
  }
  60% {
    background-position: 50% 0;
    color: rgba(0, 0, 0, 0);
  }
  100% {
    background-position: 100% 0;
    color: rgba(0, 0, 0, 0);
  }
}

.text {
  display: inline-block;

  width: 100%;
  margin-left: -0.5rem;
  padding: 0 0.25rem;

  color: rgba(64, 64, 64, 1);

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0% 33.33%,
    rgba(64, 64, 64, 1) 33.33% 66.66%,
    rgba(0, 0, 0, 0) 66.66% 100%
  );
  background-size: 300% 100%;

  animation-name: text;
  animation-duration: 0.6s;
  animation-direction: reverse;

  &::selection {
    background: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>
