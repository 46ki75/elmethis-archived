<template>
  <span v-for="text in richText" :class="{ dark: theme === 'dark' }">
    <component :is="wrapElement(text)" />
  </span>
</template>

<script setup lang="ts">
import { type RichTextDOMJSON } from 'notion-markup-utils'
import { VNode, h } from 'vue'

withDefaults(
  defineProps<{
    richText: RichTextDOMJSON[]
    /**
     * Light theme / Dark theme.
     */
    theme?: 'light' | 'dark'
  }>(),
  { theme: 'light' }
)

const wrapElement = (dom: RichTextDOMJSON): VNode => {
  let content = dom.text
  let result: string | VNode = content

  if (dom.code) result = h('code', [result])
  if (dom.bold) result = h('strong', [result])
  if (dom.italic) result = h('em', [result])
  if (dom.underline) result = h('ins', [result])
  if (dom.strikethrough) result = h('del', [result])

  switch (dom.color) {
    case 'default':
      result = h('span', result)
      break

    case 'blue':
      result = h('span', { style: { color: '#6987b8' } }, result)
      break

    case 'brown':
      result = h('span', { style: { color: '#9d5547' } }, result)
      break

    case 'gray':
      result = h('span', { style: { color: '#606875' } }, result)
      break

    case 'green':
      result = h('span', { style: { color: '#59b57c' } }, result)
      break

    case 'orange':
      result = h('span', { style: { color: '#bf7e71' } }, result)
      break

    case 'pink':
      result = h('span', { style: { color: '#c9699e' } }, result)
      break

    case 'purple':
      result = h('span', { style: { color: '#9771bd' } }, result)
      break

    case 'red':
      result = h('span', { style: { color: '#b36472' } }, result)
      break

    case 'yellow':
      result = h('span', { style: { color: '#b8a36e' } }, result)
      break

    default:
      result = h('span', result)
      break
  }

  return result
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Courier%20Prime');
span code {
  font-size: 0.9rem;
  padding: 0 0.25rem;
  margin: 0 0.25rem;
  border-radius: 0.125rem;
  font-family: 'Courier Prime', monospace;
  background-color: rgba(65, 82, 82, 0.1);
  box-shadow: 0 0 1px rgba(25, 36, 134, 0.2);
}

span.dark {
  color: rgba(255, 255, 255, 0.8);
}
</style>
