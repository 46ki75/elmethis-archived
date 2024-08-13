<template>
  <component
    v-for="(component, index) in renderComponents(components)"
    :key="index"
    :is="component"
  />
</template>

<script setup lang="ts">
import type { Component } from 'json-component-spec'
import { h, VNode } from 'vue'
import JsonInlineComponent from './elm-json-inline-component.vue'
import Heading1 from '../typography/elm-heading-1/elm-heading-1.vue'
import Heading2 from '../typography/elm-heading-2/elm-heading-2.vue'
import Heading3 from '../typography/elm-heading-3/elm-heading-3.vue'
import Toggle from '../containment/elm-toggle/elm-toggle.vue'
import CodeBlock from '../code/elm-code-block/elm-code-block.vue'
import BookmarkCard from '../typography/elm-bookmark-card/elm-bookmark-card.vue'
import Callout from '../typography/elm-callout/elm-callout.vue'
import ImageWithModal from '../image/elm-image-with-modal/elm-image-with-modal.vue'
import Divider from '../typography/elm-divider/elm-divider.vue'
import KaTex from '../typography/elm-katex/elm-katex.vue'
import Checkbox from '../form/elm-checkbox/elm-checkbox.vue'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

withDefaults(
  defineProps<{
    theme: 'light' | 'dark'
    components: Component[]
    margin: string
  }>(),
  {
    theme: 'light',
    margin: '1.5rem'
  }
)

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

function renderComponents(components: Component[]) {
  const results: VNode[] = []

  for (const component of components) {
    switch (component.component) {
      case 'audio':
      case 'embed':
      case 'file':
      case 'pdf':
      case 'table_cell':
      case 'table_row':
      case 'video': {
        break
      }

      case 'paragraph': {
        const node = h(JsonInlineComponent, {
          components: component.paragraph.children
        })

        const pnode = h('p', node)

        results.push(pnode)

        break
      }

      case 'heading': {
        switch (component.heading.level) {
          case 1: {
            const node = h(Heading1, {
              content: convertToString(component.heading.children)
            })

            results.push(node)

            break
          }

          case 2: {
            const node = h(Heading2, {
              content: convertToString(component.heading.children)
            })

            results.push(node)

            break
          }

          case 3: {
            const node = h(Heading3, {
              content: convertToString(component.heading.children)
            })

            results.push(node)

            break
          }
        }

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // toggle
      //
      // # --------------------------------------------------------------------------------

      case 'toggle': {
        const node = h(
          Toggle,
          {
            summary: convertToString(component.toggle.summary)
          },
          renderComponents(component.toggle.details)
        )

        results.push(node)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // code
      //
      // # --------------------------------------------------------------------------------

      case 'code': {
        const language = component.code.language ?? 'plain text'
        const code = component.code.content
        const caption =
          component.code.caption !== '' && component.code.caption != null
            ? component.code.caption
            : (component.code.language ?? 'plain text')

        const node = h(CodeBlock, { language, code, caption })

        results.push(node)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // bookmark
      //
      // # --------------------------------------------------------------------------------

      case 'bookmark': {
        const node = h(BookmarkCard, {
          url: component.bookmark.href,
          description: component.bookmark.description,
          title: component.bookmark.title,
          image: component.bookmark.image
        })

        results.push(node)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // callout
      //
      // # --------------------------------------------------------------------------------

      case 'callout': {
        const node = h(
          Callout,
          { color: 'amber' },
          renderComponents(component.callout.children)
        )

        results.push(node)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // columns
      //
      // # --------------------------------------------------------------------------------

      case 'columns': {
        const node = h('div', {}, renderComponents(component.columns.children))

        results.push(node)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // image
      //
      // # --------------------------------------------------------------------------------

      case 'image': {
        const node = h(ImageWithModal, {
          src: component.image.src,
          alt: component.image.alt
        })

        results.push(node)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // div
      //
      // # --------------------------------------------------------------------------------

      case 'div': {
        const node = h('div', {}, renderComponents(component.div.children))

        results.push(node)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // divider
      //
      // # --------------------------------------------------------------------------------

      case 'divider': {
        const node = h(Divider, { color: component.divider.color })

        results.push(node)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // equation
      //
      // # --------------------------------------------------------------------------------

      case 'equation': {
        const node = h(KaTex, { expression: component.equation.expression })

        results.push(node)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // list
      //
      // # --------------------------------------------------------------------------------

      case 'list': {
        switch (component.list.style) {
          case 'bulleted': {
            const li: VNode[] = []

            for (const item of component.list.items) {
              li.push(h('li', {}, renderComponents(item)))
            }

            const node = h('ul', {}, li)

            results.push(node)

            break
          }

          case 'numbered': {
            const li: VNode[] = []

            for (const item of component.list.items) {
              li.push(h('li', {}, renderComponents(item)))
            }

            const node = h('ol', {}, li)

            results.push(node)

            break
          }

          case 'todo': {
            const todos: VNode[] = []

            for (const item of component.list.items) {
              todos.push(h(Checkbox, { label: convertToString(item) }))
            }

            results.push(...todos)

            break
          }
        }

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // quote
      //
      // # --------------------------------------------------------------------------------

      case 'quote': {
        const node = h(
          'blockquote',
          {},
          renderComponents(component.quote.children)
        )

        results.push(node)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // table
      //
      // # --------------------------------------------------------------------------------

      case 'table': {
        const header = component.table.header
        const rows = component.table.rows

        const theadAndTbody: VNode[] = []

        if (header != null) {
          const headerCells: VNode[] = []

          for (const cell of header.table_row.cells) {
            headerCells.push(
              h('th', {}, renderComponents(cell.table_cell.children))
            )
          }

          const tr = h('tr', {}, headerCells)

          const thead = h('thead', {}, tr)

          theadAndTbody.push(thead)
        }

        const trArray: VNode[] = []

        for (const row of rows) {
          const rowCells: VNode[] = []

          for (const cell of row.table_row.cells) {
            rowCells.push(
              h('td', {}, renderComponents(cell.table_cell.children))
            )
          }

          const tr = h('tr', {}, rowCells)

          trArray.push(tr)
        }

        const tbody = h('tbody', {}, trArray)

        theadAndTbody.push(tbody)

        const tableNode = h('table', {}, theadAndTbody)

        results.push(tableNode)

        break
      }

      // # --------------------------------------------------------------------------------
      //
      // inlines
      //
      // # --------------------------------------------------------------------------------

      case 'link_text':
      case 'span':
      case 'text': {
        const node = h(JsonInlineComponent, { components: [component] })

        // results.push(h('p', {}, node))
        results.push(node)

        break
      }
    }
  }

  return results
}

function convertToString(components: Component[]): string {
  const results: string[] = []
  for (const component of components) {
    switch (component.component) {
      case 'text': {
        results.push(component.text.content)
        break
      }

      case 'link_text': {
        results.push(component.link_text.content)
        break
      }

      case 'span': {
        results.push(convertToString(component.span.children))
        break
      }
    }
  }
  return results.join('')
}
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

// # --------------------------------------------------------------------------------
//
// table
//
// # --------------------------------------------------------------------------------

table {
  width: fit-content;
  max-width: 100%;
  display: block;
  overflow-x: auto;
  scrollbar-width: thin;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(138, 148, 191, 0.8);
    border-radius: 3px;
    opacity: 0.6;
  }

  &::-webkit-scrollbar-track {
    background-color: #f3f3f3;
  }

  thead {
    tr {
      background-color: #444547;
      color: #ffffff;
      text-align: left;

      th {
        border-right: 1px dashed #aaada9;

        &:last-child {
          border-right: none;
        }
      }

      td {
        border-right: 1px dashed #dddddd;

        &:last-child {
          border-right: none;
        }
      }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #dddddd;

      &:nth-of-type(even) {
        background-color: #f3f3f3;
      }

      .active-row {
        font-weight: bold;
        color: #005998;
      }

      transition: background-color 0.2s;

      &:hover {
        background-color: #e7eef6;
      }
    }
  }

  th,
  td {
    padding: 12px 15px;
    white-space: nowrap;
  }
}
</style>
