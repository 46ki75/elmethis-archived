<template>
  <component :is="vnode" />
</template>

<script setup lang="ts">
import { remark } from 'remark'
import gfm from 'remark-gfm'
import frontmatter from 'remark-frontmatter'
import { computed, h } from 'vue'

import ElmMdast from './elm-mdast.vue'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

const props = defineProps<{
  markdown: string
}>()

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

const vnode = computed(() => {
  const parsedMarkdown = remark()
    .use(gfm)
    .use(frontmatter)
    .parse(props.markdown)

  return h(ElmMdast, { mdast: parsedMarkdown })
})
</script>

<style lang="scss" scoped></style>
