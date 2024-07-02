<template>
  <button @click="handleClick()">Diaplay Message</button>
</template>

<script setup lang="ts">
import { useToast } from './useToast'
const { addToast } = useToast()

const handleClick = () => {
  addToast('Hello!')
}
</script>

<style scoped lang="scss"></style>
