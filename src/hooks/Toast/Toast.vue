<template>
  <Teleport to="body">
    <div class="wrapper">
      <div v-for="(toast, index) in toasts" :key="index" class="toast">
        <span>{{ toast.content }}</span>
        <div
          class="close"
          @click="
            () => {
              closeToast(toast.id)
            }
          "
        >
          x
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { toasts, closeToast } from './toastManager'
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

.wrapper {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
}

.toast {
  background: #333;
  color: #fff;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}

.close {
  cursor: pointer;
  &:hover {
    background-color: #333;
    transform: scale(1.5);
  }
}
</style>
