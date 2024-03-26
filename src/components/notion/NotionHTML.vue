<template>
  <div v-for="dom in domjson">
    <BookmarkCard
      v-if="dom.type === 'bookmark'"
      :url="dom.url ?? ''"
      :image="dom.bookmark?.image"
      :title="dom.bookmark?.title ?? dom.url ?? ''"
      :description="dom.bookmark?.description ?? ''"
    />

    <ul v-else-if="dom.type === 'ul'">
      <li v-for="li in dom.children">
        <NotionRichText :rich-text="li.rich_text" />
      </li>
    </ul>

    <ol v-else-if="dom.type === 'ol'">
      <li v-for="li in dom.children">
        <NotionRichText :rich-text="li.rich_text" />
      </li>
    </ol>

    <Callout
      v-else-if="dom.type === 'callout'"
      :color="convertCalloutColor(dom)"
      ><NotionRichText :rich-text="dom.rich_text"
    /></Callout>

    <CodeBlock
      v-if="dom.type === 'code'"
      :code="dom.rich_text.map((text) => text.text).join('')"
      :language="dom.language ?? 'txt'"
      :caption="
        dom.caption.length !== 0
          ? dom.caption.map((text) => text.text).join('')
          : dom.language ?? 'code'
      "
    />

    <Divider v-else-if="dom.type === 'divider'" />

    <Heading2
      v-else-if="dom.type === 'heading_1'"
      :content="dom.rich_text.map((text) => text.text).join('')"
    />

    <Heading3
      v-else-if="dom.type === 'heading_2'"
      :content="dom.rich_text.map((text) => text.text).join('')"
    />

    <h3 v-else-if="dom.type === 'heading_3'">
      {{ dom.rich_text.map((text) => text.text).join('') }}
    </h3>

    <ImageWithModal
      v-else-if="dom.type === 'image'"
      :src="dom.url ?? ''"
      alt=""
    />

    <blockquote v-else-if="dom.type === 'quote'"></blockquote>

    <p v-else-if="dom.type === 'paragraph'">
      <NotionRichText :rich-text="dom.rich_text" />
    </p>

    <NotionHTML
      v-else-if="dom.type === 'synced_block'"
      :domjson="dom.children"
    />

    <table v-else-if="dom.type === 'table'">
      <thead>
        <tr>
          <th v-for="row in dom.table?.[0]">
            <NotionRichText :rich-text="row" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rows, index) in dom.table">
          <th v-if="index !== 0" v-for="row in rows">
            <NotionRichText :rich-text="row" />
          </th>
        </tr>
      </tbody>
    </table>

    <Checkbox
      v-else-if="dom.type === 'to_do'"
      :label="dom.rich_text.map((text) => text.text).join('')"
    />

    <Toggle
      v-else-if="dom.type === 'toggle'"
      :summary="dom.rich_text.map((text) => text.text).join('')"
    >
      <NotionHTML :domjson="dom.children" />
    </Toggle>
  </div>
</template>

<script setup lang="ts">
import { colors } from '../../colors'
import CodeBlock from '../code/CodeBlock.vue'
import Checkbox from '../form/Checkbox.vue'
import BookmarkCard from '../typography/BookmarkCard.vue'
import Callout from '../typography/Callout.vue'
import Divider from '../typography/Divider.vue'
import Heading2 from '../typography/Heading2.vue'
import Heading3 from '../typography/Heading3.vue'
import ImageWithModal from '../typography/ImageWithModal.vue'
import NotionRichText from './NotionRichText.vue'
import { type DOMJSON } from 'notion-markup-utils/dist/block/DOMJSON'
import Toggle from '../typography/Toggle.vue'

defineProps<{
  domjson: DOMJSON[]
}>()

const convertCalloutColor = (dom: DOMJSON) => {
  let color: keyof typeof colors = 'stone'
  switch (dom.color) {
    case 'blue':
    case 'blue_background':
      color = 'blue'
      break

    case 'brown':
    case 'brown_background':
      color = 'amber'
      break

    case 'default':
    case 'gray':
    case 'gray_background':
      color = 'stone'
      break

    case 'green':
    case 'green_background':
      color = 'green'
      break

    case 'orange':
    case 'orange_background':
      color = 'orange'
      break

    case 'pink':
    case 'pink_background':
      color = 'pink'
      break

    case 'purple':
    case 'purple_background':
      color = 'purple'
      break

    case 'red':
    case 'red_background':
      color = 'red'
      break

    case 'yellow':
    case 'yellow_background':
      color = 'yellow'
      break
  }

  return color
}
</script>

<style scoped lang="scss">
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

  * {
    transition: all 0.2s;
  }

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

  thead tr {
    background-color: rgba(0, 0, 0, 0.75);
    color: #ffffff;
    text-align: left;
  }

  th,
  td {
    padding: 12px 15px;
    white-space: nowrap;
  }

  thead tr th {
    border-right: 1px dashed #aaada9;
  }

  thead tr th:last-child {
    border-right: none;
  }

  tbody tr td {
    border-right: 1px dashed #dddddd;
  }

  tbody tr td:last-child {
    border-right: none;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr.active-row {
    font-weight: bold;
    color: #005998;
  }

  tbody tr:hover {
    background-color: #e7eef6;
  }
}
</style>
