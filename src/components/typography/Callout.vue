<template>
  <AnimateInView>
    <div
      class="container"
      :style="{
        background: `linear-gradient(
            to left,
            rgba(0, 0, 0, 0) 0% 50%,
            ${colors[color][100]} 50% 100%
        )`,
        backgroundSize: '200% 100%',
        flexDirection: title != null ? 'column' : 'row',
        gap: title != null ? '0.5rem' : '0.75rem'
      }"
    >
      <div v-if="title != null" class="header">
        <InfoIcon :size="20" />
        <div :style="{ color: colors[color][900] }">{{ title }}</div>
      </div>

      <div v-if="title == null">
        <InfoIcon :size="20" :color="colors[color][900]" />
      </div>
      <div :style="{ paddingLeft: title != null ? '2rem' : 0, opacity: 0.9 }">
        <slot></slot>
      </div></div
  ></AnimateInView>
</template>

<script setup lang="ts">
import { colors } from '../../colors'
import AnimateInView from '../utils/AnimateInView.vue'
import InfoIcon from '../icons/InfoIcon.vue'

withDefaults(
  defineProps<{
    color?: keyof typeof colors
    title?: string
  }>(),
  { color: 'slate' }
)
</script>

<style scoped lang="scss">
@keyframes in {
  from {
    background-position: 100% 0%;
  }
  to {
    background-position: 0% 0%;
  }
}

.container {
  padding: 1rem;
  border-radius: 0.25rem;

  animation-name: in;
  animation-duration: 0.4s;
  animation-delay: 0.1s;
  animation-fill-mode: both;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
  opacity: 0.9;

  display: flex;
  justify-content: flex-start;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
}
</style>
