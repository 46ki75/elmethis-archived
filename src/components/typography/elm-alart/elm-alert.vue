<template>
  <div
    ref="observerElement"
    class="wrapper"
    :style="{
      background: `linear-gradient(
            to left,
            rgba(0, 0, 0, 0) 0% 50%,
            ${rgba(colors[type], 0.1)} 50% 100%
        )`,
      backgroundSize: '200% 100%',
      backgroundPosition: `${isVisible ? 0 : 100}% 0%`,
      borderLeft: `0.25rem solid ${colors[type]}`
    }"
  >
    <div class="header">
      <component
        :is="icons[type]"
        class="icon"
        :style="{ color: darken(0.1, colors[type]) }"
      />

      <div class="title" :style="{ color: colors[type] }">
        {{ type.toUpperCase() }}
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { darken, rgba } from 'polished'

import {
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
  XCircleIcon
} from '@heroicons/vue/24/outline'

import { useElementVisibility } from '@vueuse/core'
import { FunctionalComponent, ref } from 'vue'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

type AlertType = 'note' | 'tip' | 'important' | 'warning' | 'caution'

defineProps<{
  type: AlertType
}>()

const observerElement = ref<HTMLElement | null>(null)

const isVisible = useElementVisibility(observerElement)

const colors: Record<AlertType, string> = {
  note: '#59b57c',
  tip: '#6987b8',
  important: '#9771bd',
  warning: '#b8a36e',
  caution: '#b36472'
}

const icons: Record<AlertType, FunctionalComponent> = {
  note: ChatBubbleBottomCenterTextIcon,
  tip: LightBulbIcon,
  important: ShieldExclamationIcon,
  warning: ExclamationTriangleIcon,
  caution: XCircleIcon
}
</script>

<style lang="scss" scoped>
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

.wrapper {
  padding: 1rem 1rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  transition: background-position 0.6s;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    .icon {
      width: 20px;
      height: 20px;
    }

    .title {
      height: 24px;
      line-height: 24px;
    }
  }
}
</style>
