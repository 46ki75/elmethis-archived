<template>
  <span v-for="text in richText">
    <component :is="wrapElement(text)" />
  </span>
</template>

<script setup lang="ts">
import { type RichTextDOMJSON } from 'notion-markup-utils'
import { VNode, h } from 'vue'
import { colors } from '../../colors'

defineProps<{
  richText: RichTextDOMJSON[]
}>()

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
      result = h('span', { style: { color: colors.blue[800] } }, result)
      break

    case 'brown':
      result = h('span', { style: { color: colors.amber[800] } }, result)
      break

    case 'gray':
      result = h('span', { style: { color: colors.stone[800] } }, result)
      break

    case 'green':
      result = h('span', { style: { color: colors.green[800] } }, result)
      break

    case 'orange':
      result = h('span', { style: { color: colors.orange[800] } }, result)
      break

    case 'pink':
      result = h('span', { style: { color: colors.pink[800] } }, result)
      break

    case 'purple':
      result = h('span', { style: { color: colors.purple[800] } }, result)
      break

    case 'red':
      result = h('span', { style: { color: colors.red[800] } }, result)
      break

    case 'yellow':
      result = h('span', { style: { color: colors.yellow[800] } }, result)
      break

    default:
      result = h('span', result)
      break
  }

  return result
}
</script>

<style scoped lang="scss">
span code {
  font-size: 1rem;
  padding: 0 0.25rem;
  margin: 0 0.25rem;
  border-radius: 0.125rem;
  background-color: rgba(65, 82, 82, 0.1);
  box-shadow: 0 0 1px rgba(25, 36, 134, 0.2);
}
</style>
