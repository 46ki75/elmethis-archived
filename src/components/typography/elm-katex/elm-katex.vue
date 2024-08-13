<template>
  <div class="container" v-html="renderedMath"></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

const props = defineProps<{
  expression: string
  options?: katex.KatexOptions
}>()

// # --------------------------------------------------------------------------------
//
// script
//
// # --------------------------------------------------------------------------------

const renderedMath = ref<string>('')

const renderMath = () => {
  try {
    renderedMath.value = katex.renderToString(props.expression, props.options)
  } catch (error) {
    console.error('Error rendering KaTeX expression:', error)
    renderedMath.value = 'Error rendering expression'
  }
}

watch(() => props.expression, renderMath, { immediate: true })
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
