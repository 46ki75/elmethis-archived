<template>
  <Teleport to="body">
    <div class="toast-container">
      <div v-for="(toast, index) in toasts" :key="index" class="toast">
        {{ toast }}
      </div>
    </div></Teleport
  >
</template>

<script setup lang="ts">
import { toasts, addToast } from './toastManager'

const handleClick = () => {
  addToast('Hi!')
}
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

.toast-container {
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
}
</style>
