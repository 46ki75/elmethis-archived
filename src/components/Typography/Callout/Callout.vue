<template>
  <div v-if="isVisible">
    <AnimateInView>
      <div
        class="container"
        :style="{
          marginBottom: margin ?? 0,
          background: `linear-gradient(
            to left,
            rgba(0, 0, 0, 0) 0% 50%,
            ${hexToRGBA(colors[color][200], 0.3)} 50% 100%
        )`,
          backgroundSize: '200% 100%',
          flexDirection: title != null ? 'column' : 'row',
          gap: title != null ? '0.5rem' : '0.75rem',
          borderLeft: `solid 3px ${colors[color][700]}`
        }"
      >
        <div
          v-if="closable"
          class="cross"
          @click="
            () => {
              isVisible = false
            }
          "
        >
          ×
        </div>
        <div v-if="title != null" class="header">
          <info-icon
            :size="20"
            :color="theme === 'dark' ? colors[color][100] : colors[color][900]"
          />
          <div
            :style="{
              color: theme === 'dark' ? colors[color][100] : colors[color][900]
            }"
          >
            {{ title }}
          </div>
        </div>

        <div v-if="title == null">
          <InfoIcon
            :size="20"
            :color="theme === 'dark' ? colors[color][900] : colors[color][100]"
          />
        </div>
        <div
          :style="{
            paddingLeft: title != null ? '2rem' : 0,
            opacity: 0.9,
            color:
              theme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
          }"
        >
          <slot />
        </div>
      </div>
    </AnimateInView>
  </div>
</template>

<script setup lang="ts">
import { colors } from '../../../colors'
import AnimateInView from '../../Utils/AnimateInView/AnimateInView.vue'
import InfoIcon from '../../Icons/InfoIcon/InfoIcon.vue'
import { ref } from 'vue'

function hexToRGBA(hex: string, opacity: number): string {
  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0')
  return `${hex}${alpha}`
}

withDefaults(
  defineProps<{
    color?: keyof typeof colors
    title?: string
    /**
     * **optional?**
     *
     * This is the margin on the bottom side of the element.
     * If not specified, it defaults to 0.
     */
    margin?: string
    /**
     * Light theme / Dark theme.
     */
    theme?: 'light' | 'dark'
    closable?: boolean
  }>(),
  { color: 'slate', theme: 'light', closable: false }
)

const isVisible = ref(true)
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
  border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;

  animation-name: in;
  animation-duration: 0.4s;
  animation-delay: 0.1s;
  animation-fill-mode: both;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
  opacity: 0.9;

  display: flex;
  justify-content: flex-start;
}

.cross {
  position: absolute;
  height: 1.25rem;
  width: 1.25rem;
  top: 1rem;
  right: 1rem;
  text-align: center;
  line-height: 1.25rem;

  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.4;
  }
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
}
</style>
