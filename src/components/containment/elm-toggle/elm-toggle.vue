<template>
  <details @click="setIsOpen(!isOpen)">
    <summary
      class="summary"
      :style="{ borderRadius: isOpen ? '0.25rem 0.25rem 0 0' : '0.25rem' }"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          opacity="0.6"
          viewBox="0 0 352 512"
          :style="{
            marginRight: '0.5rem',
            transition: 'all 0.2s',
            transform: `rotateZ(${isOpen ? '180deg' : '45deg'})`
          }"
        >
          <path
            d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z"
            fill="darkgreen"
          />
        </svg>
        <span>{{ summary }}</span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        viewBox="0 0 448 512"
        :style="{
          transform: `rotateX(${isOpen ? '180deg' : '0deg'})`,
          transition: 'all 0.2s'
        }"
      >
        <path
          d="M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z"
        />
      </svg>
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
