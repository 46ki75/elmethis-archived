<template>
  <details @click="setIsOpen(!isOpen)">
    <summary
      class="summary"
      :style="{ borderRadius: isOpen ? '0.25rem 0.25rem 0 0' : '0.25rem' }"
    >
      <div class="summary-left">
        <PlusIcon
          :style="{
            marginRight: '0.5rem',
            transition: 'all 0.2s',
            transform: `rotateZ(${isOpen ? '45deg' : '180deg'})`,
            width: 16,
            height: 16,
            color: '#3c8658'
          }"
        />

        <div>{{ summary }}</div>
      </div>

      <ChevronUpIcon
        :style="{
          transform: `rotateX(${isOpen ? '180deg' : '0deg'})`,
          transition: 'all 0.2s',
          width: 20,
          height: 20
        }"
      />
    </summary>
  </details>

  <transition name="children">
    <div v-if="isOpen" class="children">
      <div>
        <slot />
      </div>
    </div>
  </transition>

  <transition name="fold">
    <div v-if="isOpen" class="fold" @click="setIsOpen(false)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 352 512"
      >
        <path
          d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z"
        />
      </svg>
      <span>FOLD</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { PlusIcon, ChevronUpIcon } from '@heroicons/vue/20/solid'

const isOpen = ref<boolean>(false)
const setIsOpen = (flag: boolean) => {
  isOpen.value = flag
}

defineProps<{
  /**
   * **required!**
   *
   * The string that is displayed on the header of a collapsible tab.
   * It is always visible, whether the tab is collapsed or not.
   */
  summary: string
  /**
   * **optional?**
   *
   * This is the margin on the bottom side of the element.
   * If not specified, it defaults to 0.
   */
  margin?: string
}>()
</script>

<style scoped>
.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.02);

  cursor: pointer;
  user-select: none;
  padding: 0.75rem;
  border: solid 1px rgba(0, 0, 0, 0.25);

  .summary-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

.children-enter-to,
.children-leave-from {
  transform: scaleY(1);
}

.children-enter-active,
.children-leave-active {
  transition: transform 200ms;
}

.children-enter-from,
.children-leave-to {
  transform: scaleY(0);
}

.children {
  padding: 0.75rem;
  border: solid 1px rgba(0, 0, 0, 0.25);
  border-top: none;

  border-radius: 0 0 0.25rem 0.25rem;

  transform-origin: 50% 0%;

  /* div {
    transition: opacity 0.2s ${isOpen ? '0.2s' : '0s'};
    opacity: ${isOpen ? 1 : 0};
  } */
}

.fold-enter-to,
.fold-leave-from {
  opacity: 1;
}

.fold-enter-active,
.fold-leave-active {
  transition: opacity 200ms;
}

.fold-enter-from,
.fold-leave-to {
  opacity: 0;
}

.fold {
  padding: 0.5rem 0;
  transition: all 0.1s;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;

  cursor: pointer;
}
</style>
