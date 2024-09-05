<template>
  <component v-for="(node, index) in vnode" :key="index" :is="node" />
</template>

<script setup lang="ts">
import type { PhrasingContent, Root, RootContent } from 'mdast'
import { computed, h, VNode } from 'vue'

import ElmLinkText from '../typography/elm-link-text/elm-link-text.vue'
import ElmImageWithModal from '../image/elm-image-with-modal/elm-image-with-modal.vue'
import ElmHeading1 from '../typography/elm-heading-1/elm-heading-1.vue'
import ElmHeading2 from '../typography/elm-heading-2/elm-heading-2.vue'
import ElmHeading3 from '../typography/elm-heading-3/elm-heading-3.vue'
import ElmCodeBlock from '../code/elm-code-block/elm-code-block.vue'
import ElmDivider from '../typography/elm-divider/elm-divider.vue'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

const props = defineProps<{
  mdast: Root
}>()

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

// # --------------------------------------------------------------------------------
//
// utils
//
// # --------------------------------------------------------------------------------

function convertPhrasingContentToString(
  phrasingContent: PhrasingContent[]
): string {
  const results: string[] = []
  for (const node of phrasingContent) {
    switch (node.type) {
      case 'text':
      case 'inlineCode': {
        results.push(node.value)
        break
      }

      case 'delete':
      case 'emphasis':
      case 'strong':
      case 'link':
      case 'linkReference': {
        results.push(convertPhrasingContentToString(node.children))
        break
      }

      case 'break': {
        results.push(' ')
        break
      }

      case 'html':
      case 'image':
      case 'imageReference':
      case 'footnoteReference': {
        break
      }
    }
  }

  return results.join('')
}

function convertPhrasingContentToVNode(
  phrasingContent: PhrasingContent[]
): VNode[] {
  const results: VNode[] = []
  for (const node of phrasingContent) {
    switch (node.type) {
      case 'text': {
        results.push(h('span', node.value))
        break
      }

      case 'inlineCode': {
        results.push(h('code', node.value))
        break
      }

      case 'break': {
        results.push(h('br'))
        break
      }

      case 'delete': {
        results.push(h('del', convertPhrasingContentToVNode(node.children)))
        break
      }

      case 'emphasis': {
        results.push(h('em', convertPhrasingContentToVNode(node.children)))
        break
      }

      case 'strong': {
        results.push(h('strong', convertPhrasingContentToVNode(node.children)))
        break
      }

      case 'link': {
        results.push(
          h(ElmLinkText, {
            text: convertPhrasingContentToString(node.children),
            href: node.url
          })
        )
        break
      }

      case 'linkReference': {
        results.push(...convertPhrasingContentToVNode(node.children))
        break
      }

      case 'image': {
        results.push(
          h(ElmImageWithModal, { src: node.url, alt: node.alt ?? '' })
        )
        break
      }

      case 'footnoteReference': {
        results.push(
          h(
            'a',
            {
              id: `footernote-body-${node.identifier}`,
              href: `#footernote-${node.identifier}`
            },
            h('sup', node.label ?? node.identifier)
          )
        )
        break
      }

      case 'html':
      case 'imageReference': {
        break
      }
    }
  }

  return results
}

// # --------------------------------------------------------------------------------
//
// converts
//
// # --------------------------------------------------------------------------------

function convertMdast(nodes: RootContent[]): { vnodes: VNode[] } {
  const results: VNode[] = []
  for (const child of nodes) {
    switch (child.type) {
      case 'text':
      case 'inlineCode':
      case 'break':
      case 'delete':
      case 'emphasis':
      case 'strong':
      case 'link':
      case 'linkReference':
      case 'image':
      case 'footnoteReference':
      case 'html':
      case 'imageReference': {
        break
      }

      case 'heading': {
        const plainText = convertPhrasingContentToString(child.children)
        switch (child.depth) {
          case 1: {
            results.push(h(ElmHeading1, { content: plainText }))
            break
          }

          case 2: {
            results.push(h(ElmHeading2, { content: plainText }))
            break
          }

          case 3: {
            results.push(h(ElmHeading3, { content: plainText }))
            break
          }

          case 4:
          case 5:
          case 6: {
            results.push(h('h' + child.depth, plainText))
            break
          }
        }
        break
      }

      case 'paragraph': {
        results.push(...convertPhrasingContentToVNode(child.children))
        break
      }

      case 'blockquote': {
        results.push(h('blockquote', convertMdast(child.children).vnodes))
        break
      }

      case 'code': {
        results.push(
          h(ElmCodeBlock, {
            code: child.value,
            language: child.lang ?? 'txt',
            caption: child.meta ?? undefined
          })
        )
        break
      }

      case 'list': {
        if (child.ordered) {
          results.push(h('ol', convertMdast(child.children).vnodes))
        } else {
          results.push(h('ul', convertMdast(child.children).vnodes))
        }
        break
      }

      case 'listItem': {
        results.push(h('li', convertMdast(child.children).vnodes))
        break
      }

      case 'table': {
        const tableNode = child.children
        const tableRowVNode: VNode[] = []
        for (const [index, row] of tableNode.entries()) {
          if (index === 0) {
            tableRowVNode.push(
              h(
                'thead',
                h(
                  'tr',
                  row.children.map((cell) => {
                    return h('th', convertPhrasingContentToVNode(cell.children))
                  })
                )
              )
            )
          } else {
            tableRowVNode.push(
              h(
                'tbody',
                h(
                  'tr',
                  row.children.map((cell) => {
                    return h('td', convertPhrasingContentToVNode(cell.children))
                  })
                )
              )
            )
          }
        }
        results.push(...tableRowVNode)
        break
      }

      case 'thematicBreak': {
        results.push(h(ElmDivider))
        break
      }

      case 'footnoteDefinition': {
        const node = h('p', [
          h(
            'a',
            {
              id: `footernote-${child.identifier}`,
              href: `#footernote-body-${child.identifier}`
            },
            h('sup', child.label ?? child.identifier)
          ),
          ...convertMdast(child.children).vnodes
        ])
        results.push(node)
        break
      }

      // TODO: implement linkReference, imageReference
      case 'definition': {
        break
      }

      // TODO: implement frontmatter
      case 'yaml': {
        break
      }

      case 'tableCell':
      case 'tableRow': {
        break
      }
    }
  }

  return { vnodes: results }
}

const vnode = computed(() => {
  return convertMdast(props.mdast.children).vnodes
})
</script>

<style lang="scss" scoped></style>
