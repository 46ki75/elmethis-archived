<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="isVisible"
        class="background"
        @click="$emit('close')"
        :style="{
          pointerEvents: isVisible ? 'auto' : 'none'
        }"
      >
        <div class="container">
          <div class="title" :style="{ opacity: isVisible ? 1 : 0 }">
            {{ title }}
          </div>

          <div class="divider">
            <Divider
              :key="String(isVisible)"
              :color="'rgba(255,255,255,0.6)'"
            />
          </div>

          <div class="modal" @click.stop>
            <slot />
          </div>

          <div class="flavor" :style="{ opacity: isVisible ? 1 : 0 }">
            Click outside the modal window to close.
          </div>
        </div>
      </div></transition
    >
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import Divider from '../../Typography/Divider/Divider.vue'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

defineProps<{
  /**
   * **required!**
   *
   * Title displayed in the modal header
   */
  title: string
  isVisible: boolean
}>()

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

const emit = defineEmits(['close'])
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.2s;
  cursor: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM0Mi42IDE1MC42YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwTDE5MiAyMTAuNyA4Ni42IDEwNS40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM0wxNDYuNyAyNTYgNDEuNCAzNjEuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMEwxOTIgMzAxLjMgMjk3LjQgNDA2LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM0wyMzcuMyAyNTYgMzQyLjYgMTUwLjZ6Ii8+PC9zdmc+'),
    pointer;

  .container {
    box-sizing: border-box;
    width: 90%;
    max-width: 820px;
    max-height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    cursor: auto;

    .title {
      color: rgba($color: #ffffff, $alpha: 0.8);
      font-size: 1.25rem;
      width: 100%;
      transition: opacity 0.2s 0.1s;
      margin-bottom: -0.75rem;
      user-select: none;
    }

    .divider {
      width: 100%;
    }

    .modal {
      box-sizing: border-box;
      padding: 1rem;
      background-color: rgba($color: #ffffff, $alpha: 0.8);
      transition: opacity 0.2s 0.2s;
      box-shadow: 0 0 0.5rem rgba($color: #000000, $alpha: 0.4);
    }

    .flavor {
      width: 100%;
      text-align: right;
      color: rgba($color: #ffffff, $alpha: 0.8);
      font-size: 0.5rem;
      transition: opacity 0.2s 0.3s;
      user-select: none;
    }
  }
}
</style>
