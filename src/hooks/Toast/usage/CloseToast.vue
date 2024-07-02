<template>
  <button @click="handleClick()">Diaplay Message</button>
  <button @click="handleClose()">Close latest toast</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from '../useToast'
import { closeToast } from '../toastManager'
const { addToast } = useToast()

const id = ref('')

const handleClick = () => {
  const toast = addToast({ content: 'Hello!' })
  id.value = toast.id
}

const handleClose = () => {
  closeToast(id.value)
}
</script>
