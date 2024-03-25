<template>
  <div>
    {{ isChecked }}
    <Checkbox v-model:isChecked="isChecked" label="Checkbox" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from './components/form/Checkbox.vue'

const isChecked = ref(false)
</script>

<style lang="scss" scoped></style>
