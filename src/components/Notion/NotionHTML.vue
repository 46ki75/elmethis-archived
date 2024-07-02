<template>
  <div v-for="dom in domjson">
    <component
      v-if="
        dom.type === 'breadcrumb' ||
        dom.type === 'bulleted_list_item' ||
        dom.type === 'child_database' ||
        dom.type === 'child_page' ||
        dom.type === 'column' ||
        dom.type === 'column_list' ||
        dom.type === 'embed' ||
        dom.type === 'equation' ||
        dom.type === 'file' ||
        dom.type === 'link_preview' ||
        dom.type === 'mention' ||
        dom.type === 'numbered_list_item' ||
        dom.type === 'pdf' ||
        dom.type === 'root' ||
        dom.type === 'table_of_contents' ||
        dom.type === 'table_row' ||
        dom.type === 'video'
      "
      :is=""
    />

    <BookmarkCard
      v-else-if="dom.type === 'bookmark'"
      :url="dom.url ?? ''"
      :image="dom.bookmark?.image"
      :title="dom.bookmark?.title ?? dom.url ?? ''"
      :description="dom.bookmark?.description ?? ''"
      margin="2.5rem"
    />

    <ul v-else-if="dom.type === 'ul'">
      <li v-for="li in dom.children">
        <NotionRichText :rich-text="li.rich_text" :theme="theme" />
      </li>
    </ul>

    <ol v-else-if="dom.type === 'ol'">
      <li v-for="li in dom.children">
        <NotionRichText :rich-text="li.rich_text" :theme="theme" />
      </li>
    </ol>

    <Callout
      v-else-if="dom.type === 'callout'"
      :color="convertCalloutColor(dom)"
      margin="2.5rem"
      ><NotionRichText :rich-text="dom.rich_text" :theme="theme"
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
      margin="2.5rem"
      :theme="theme"
    />

    <Divider v-else-if="dom.type === 'divider'" margin="2.5rem" />

    <Heading2
      v-else-if="dom.type === 'heading_1'"
      :content="dom.rich_text.map((text) => text.text).join('')"
      margin="1.5rem"
    />

    <Heading3
      v-else-if="dom.type === 'heading_2'"
      :content="dom.rich_text.map((text) => text.text).join('')"
      margin="1.5rem"
    />

    <h3 v-else-if="dom.type === 'heading_3'" style="margin-bottom: 2rem">
      {{ dom.rich_text.map((text) => text.text).join('') }}
    </h3>

    <ImageWithModal
      v-else-if="dom.type === 'image'"
      :src="dom.url ?? ''"
      alt=""
      margin="2.5rem"
    />

    <blockquote
      v-else-if="dom.type === 'quote'"
      style="
        box-sizing: border-box;
        margin: 0;
        margin-bottom: 2rem;
        padding: 2rem;
        width: 100%;
        border-left: solid 3px rgba(0, 0, 0, 0.3);
      "
    >
      <NotionRichText :rich-text="dom.rich_text" :theme="theme" />
      <NotionHTML :domjson="dom.children" :theme="theme" />
    </blockquote>

    <p v-else-if="dom.type === 'paragraph'">
      <NotionRichText :rich-text="dom.rich_text" :theme="theme" />
    </p>

    <NotionHTML
      v-else-if="dom.type === 'synced_block'"
      :domjson="dom.children"
      :theme="theme"
    />

    <table v-else-if="dom.type === 'table'">
      <thead>
        <tr>
          <th v-for="row in dom.table?.[0]">
            <NotionRichText :rich-text="row" :theme="theme" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rows in dom.table?.slice(1)">
          <td v-for="row in rows">
            <NotionRichText :rich-text="row" :theme="theme" />
          </td>
        </tr>
      </tbody>
    </table>

    <Checkbox
      v-else-if="dom.type === 'to_do'"
      :label="dom.rich_text.map((text) => text.text).join('')"
      margin="1.25rem"
    />

    <Toggle
      v-else-if="dom.type === 'toggle'"
      :summary="dom.rich_text.map((text) => text.text).join('')"
      margin="0rem"
    >
      <NotionHTML :domjson="dom.children" :theme="theme" />
    </Toggle>
  </div>
</template>

<script setup lang="ts">
import { colors } from '../../colors'
import CodeBlock from '../Code/CodeBlock/CodeBlock.vue'
import Checkbox from '../Form/Checkbox/Checkbox.vue'
import BookmarkCard from '../Typography/BookmarkCard/BookmarkCard.vue'
import Callout from '../Typography/Callout/Callout.vue'
import Divider from '../Typography/Divider/Divider.vue'
import Heading2 from '../Typography/Heading2/Heading2.vue'
import Heading3 from '../Typography/Heading3/Heading3.vue'
import ImageWithModal from '../Image/ImageWithModal/ImageWithModal.vue'
import NotionRichText from './NotionRichText.vue'
import { type DOMJSON } from 'notion-markup-utils/dist/block/DOMJSON'
import Toggle from '../Containment/Toggle/Toggle.vue'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

withDefaults(
  defineProps<{
    domjson: DOMJSON[]
    /**
     * Light theme / Dark theme.
     */
    theme?: 'light' | 'dark'
  }>(),
  { theme: 'light' }
)

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

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
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

p {
  margin-bottom: 2rem;
}

table {
  width: fit-content;
  max-width: 100%;
  margin-bottom: 2rem;
  overflow-x: auto;

  font-size: 0.9em;
  font-family: sans-serif;

  display: block;
  scrollbar-width: thin;
  border-collapse: collapse;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  border-radius: 0.125rem;

  * {
    transition: all 0.2s;
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(138, 191, 162, 0.8);
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
    background-color: #e7f6ea;
  }
}

ul {
  margin-bottom: 2rem;
  padding-left: 2rem;
  li {
    margin-bottom: 0.75rem;
    list-style-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20512%22%20height%3D%2216%22%20width%3D%2216%22%3E%3Cpath%20d%3D%22M296%20160H180.6l42.6-129.8C227.2%2015%20215.7%200%20200%200H56C44%200%2033.8%208.9%2032.2%2020.8l-32%20240C-1.7%20275.2%209.5%20288%2024%20288h118.7L96.6%20482.5c-3.6%2015.2%208%2029.5%2023.3%2029.5%208.4%200%2016.4-4.4%2020.8-12l176-304c9.3-15.9-2.2-36-20.7-36z%22%20fill%3D%22steelblue%22%20opacity%3D%220.8%22%2F%3E%3C%2Fsvg%3E');
    &::before {
      padding-right: 0.25rem;
      content: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%20height%3D%2214%22%20width%3D%2216%22%3E%3Cpath%20d%3D%22M224.3%20273l-136%20136c-9.4%209.4-24.6%209.4-33.9%200l-22.6-22.6c-9.4-9.4-9.4-24.6%200-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6%200-33.9L54.3%20103c9.4-9.4%2024.6-9.4%2033.9%200l136%20136c9.5%209.4%209.5%2024.6%20.1%2034zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9%200l-22.6%2022.6c-9.4%209.4-9.4%2024.6%200%2033.9l96.4%2096.4-96.4%2096.4c-9.4%209.4-9.4%2024.6%200%2033.9l22.6%2022.6c9.4%209.4%2024.6%209.4%2033.9%200l136-136c9.4-9.2%209.4-24.4%200-33.8z%22%20fill%3D%22darkblue%22%20opacity%3D%220.5%22%2F%3E%3C%2Fsvg%3E');
    }
  }
}

ol {
  margin-bottom: 2rem;
  padding-left: 2rem;
  li {
    margin-bottom: 0.75rem;
    list-style-type: decimal;

    &::before {
      padding-right: 0.25rem;
      content: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%20height%3D%2214%22%20width%3D%2216%22%3E%3Cpath%20d%3D%22M224.3%20273l-136%20136c-9.4%209.4-24.6%209.4-33.9%200l-22.6-22.6c-9.4-9.4-9.4-24.6%200-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6%200-33.9L54.3%20103c9.4-9.4%2024.6-9.4%2033.9%200l136%20136c9.5%209.4%209.5%2024.6%20.1%2034zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9%200l-22.6%2022.6c-9.4%209.4-9.4%2024.6%200%2033.9l96.4%2096.4-96.4%2096.4c-9.4%209.4-9.4%2024.6%200%2033.9l22.6%2022.6c9.4%209.4%2024.6%209.4%2033.9%200l136-136c9.4-9.2%209.4-24.4%200-33.8z%22%20fill%3D%22darkblue%22%20opacity%3D%220.5%22%2F%3E%3C%2Fsvg%3E');
    }
    &::marker {
      color: darkblue;
      opacity: 0.8;
      font-weight: bold;
    }
  }
}
</style>
