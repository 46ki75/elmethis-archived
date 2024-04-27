<template>
  <span v-for="text in richText" :class="{ dark: theme === 'dark' }">
    <component :is="wrapElement(text)" />
  </span>
</template>

<script setup lang="ts">
import { type RichTextDOMJSON } from 'notion-markup-utils'
import { VNode, h } from 'vue'
import { colors } from '../../colors'

const props = withDefaults(
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
  const colorNumber = props.theme === 'light' ? 800 : 300

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
      result = h('span', { style: { color: colors.blue[colorNumber] } }, result)
      break

    case 'brown':
      result = h(
        'span',
        { style: { color: colors.amber[colorNumber] } },
        result
      )
      break

    case 'gray':
      result = h(
        'span',
        { style: { color: colors.stone[colorNumber] } },
        result
      )
      break

    case 'green':
      result = h(
        'span',
        { style: { color: colors.green[colorNumber] } },
        result
      )
      break

    case 'orange':
      result = h(
        'span',
        { style: { color: colors.orange[colorNumber] } },
        result
      )
      break

    case 'pink':
      result = h('span', { style: { color: colors.pink[colorNumber] } }, result)
      break

    case 'purple':
      result = h(
        'span',
        { style: { color: colors.purple[colorNumber] } },
        result
      )
      break

    case 'red':
      result = h('span', { style: { color: colors.red[colorNumber] } }, result)
      break

    case 'yellow':
      result = h(
        'span',
        { style: { color: colors.yellow[colorNumber] } },
        result
      )
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
  font-size: 0.9rem;
  padding: 0 0.25rem;
  margin: 0 0.25rem;
  border-radius: 0.125rem;
  background-color: rgba(65, 82, 82, 0.1);
  box-shadow: 0 0 1px rgba(25, 36, 134, 0.2);
}

span.dark {
  color: rgba(255, 255, 255, 0.8);
}
</style>
