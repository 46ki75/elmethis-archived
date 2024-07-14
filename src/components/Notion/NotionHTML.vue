<template>
  <span v-for="dom in domjson" :style="{ display: 'inline' }">
    <!-- UNSUPORTeD -->

    <component
      v-if="
        dom.type === 'audio' ||
        dom.type === 'embed' ||
        dom.type === 'file' ||
        dom.type === 'pdf' ||
        dom.type === 'to_do' ||
        dom.type === 'video'
      "
      :is=""
    />

    <!-- BOOKMARK -->

    <BookmarkCard
      v-else-if="dom.type === 'bookmark'"
      :url="dom.content ?? ''"
      :image="dom.extension.image"
      :title="dom.extension.title"
      :description="dom.extension.description"
      :margin="margin"
    />

    <Callout
      v-else-if="dom.type === 'callout'"
      :margin="margin"
      :theme="theme"
      :color="'emerald'"
    >
      <NotionHTML :domjson="dom.children" :theme="theme" />
    </Callout>

    <CodeBlock
      v-else-if="dom.type === 'code'"
      :code="dom.content"
      :margin="margin"
      :theme="theme"
    />

    <Divider v-else-if="dom.type === 'divider'" :margin="margin" />

    <!-- HEADING -->

    <Toggle
      v-else-if="
        (dom.type === 'heading_1' ||
          dom.type === 'heading_2' ||
          dom.type === 'heading_3') &&
        dom.children.length > 0
      "
      :summary="dom.content"
      :margin="margin"
    >
      <NotionHTML :domjson="dom.children" :theme="theme" />
    </Toggle>

    <Heading1
      v-else-if="dom.type === 'heading_1'"
      :content="dom.content"
      :margin="margin"
    />

    <Heading2
      v-else-if="dom.type === 'heading_2'"
      :content="dom.content"
      :margin="margin"
    />

    <Heading3
      v-else-if="dom.type === 'heading_3'"
      :content="dom.content"
      :margin="margin"
    />

    <!-- IMAGE -->

    <ImageWithModal
      v-else-if="dom.type === 'image'"
      :src="dom.content"
      :margin="margin"
    />

    <!-- PARAGRAPH -->

    <p v-else-if="dom.type === 'paragraph'" :style="{ marginBottom: margin }">
      <NotionHTML :domjson="dom.children" :theme="theme" />
    </p>

    <!-- QUOTE -->

    <blockquote
      v-else-if="dom.type === 'quote'"
      :style="{ marginBottom: margin }"
    >
      <NotionHTML :domjson="dom.children" :theme="theme" />
    </blockquote>

    <!-- LIST (BULLETED) -->

    <ul v-else-if="dom.type === 'ul'" :style="{ marginBottom: margin }">
      <li v-for="list in dom.children">
        <NotionHTML :domjson="list.children" :theme="theme" />
      </li>
    </ul>

    <!-- LIST (NUMBERD) -->

    <ol v-else-if="dom.type === 'ol'" :style="{ marginBottom: margin }">
      <li v-for="list in dom.children">
        <NotionHTML :domjson="list.children" :theme="theme" />
      </li>
    </ol>

    <!-- TABLE -->

    <table v-else-if="dom.type === 'table'" :style="{ marginBottom: margin }">
      <thead>
        <tr>
          <th v-for="cell in dom.children.shift()?.children">
            <NotionHTML :domjson="cell.children" :theme="theme" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in dom.children">
          <td v-for="cell in row.children">
            <NotionHTML :domjson="cell.children" :theme="theme" />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- TOGGLE -->
    <Toggle
      v-else-if="dom.type === 'toggle'"
      :summary="dom.content"
      :style="{ marginBottom: margin }"
    >
      <NotionHTML :domjson="dom.children" :theme="theme" />
    </Toggle>

    <!-- INLINE -->

    <span
      v-else-if="dom.type === 'inline_text'"
      :class="dom.color"
      :style="{
        display: 'inline',
        color:
          dom.color === 'default' || dom.color.endsWith('_background')
            ? theme === 'dark'
              ? 'rgb(222,222,222)'
              : 'rgb(22,22,22)'
            : ''
      }"
      >{{ dom.content }}</span
    >

    <u
      v-else-if="dom.type === 'inline_underline'"
      :class="dom.color"
      :style="{
        display: 'inline',
        color:
          dom.color === 'default' || dom.color.endsWith('_background')
            ? theme === 'dark'
              ? 'rgb(222,222,222)'
              : 'rgb(22,22,22)'
            : ''
      }"
      >{{ dom.content }}</u
    >

    <em
      v-else-if="dom.type === 'inline_italic'"
      :class="dom.color"
      :style="{
        display: 'inline',
        color:
          dom.color === 'default' || dom.color.endsWith('_background')
            ? theme === 'dark'
              ? 'rgb(222,222,222)'
              : 'rgb(22,22,22)'
            : ''
      }"
      >{{ dom.content }}</em
    >

    <code
      v-else-if="dom.type === 'inline_code'"
      :class="dom.color"
      :style="{
        display: 'inline',
        color:
          dom.color === 'default' || dom.color.endsWith('_background')
            ? theme === 'dark'
              ? 'rgb(222,222,222)'
              : 'rgb(22,22,22)'
            : '',
        fontFamily: '\'Courier Prime\', monospace'
      }"
      >{{ dom.content }}</code
    >

    <strong
      v-else-if="dom.type === 'inline_bold'"
      :class="dom.color"
      :style="{
        display: 'inline',
        color:
          dom.color === 'default' || dom.color.endsWith('_background')
            ? theme === 'dark'
              ? 'rgb(222,222,222)'
              : 'rgb(22,22,22)'
            : ''
      }"
      >{{ dom.content }}</strong
    >

    <Linktext
      v-else-if="dom.type === 'inline_link'"
      :href="String(dom.attribute?.href)"
      :text="dom.content"
    />
  </span>
</template>

<script setup lang="ts">
import { DOMJSON } from 'notion-ex/dist/DOMJSON'
import BookmarkCard from '../Typography/BookmarkCard/BookmarkCard.vue'
import Callout from '../Typography/Callout/Callout.vue'
import Linktext from '../Typography/Linktext/Linktext.vue'
import CodeBlock from '../Code/CodeBlock/CodeBlock.vue'
import Divider from '../Typography/Divider/Divider.vue'
import Heading1 from '../Typography/Heading1/Heading1.vue'
import Heading2 from '../Typography/Heading2/Heading2.vue'
import Heading3 from '../Typography/Heading3/Heading3.vue'
import ImageWithModal from '../Image/ImageWithModal/ImageWithModal.vue'
import Toggle from '../Containment/Toggle/Toggle.vue'

withDefaults(
  defineProps<{
    theme: 'light' | 'dark'
    domjson: DOMJSON[]
    margin: string
  }>(),
  {
    theme: 'light',
    margin: '1.5rem'
  }
)
</script>

<style scoped lang="scss">
blockquote {
  box-sizing: border-box;
  width: 100%;
  padding: 0.25rem;
  margin: 0;
  border-left: solid 3px rgba($color: #000000, $alpha: 0.3);
}

/* Foreground colors */

.gray {
  color: #788191;
}

.brown {
  color: #6e3c3c;
}

.orange {
  color: #b76e5f;
}

.yellow {
  color: #b0985d;
}

.green {
  color: #4ba96f;
}

.blue {
  color: #5879b0;
}

.purple {
  color: #8a60b5;
}

.pink {
  color: #c25692;
}

.red {
  color: #aa5363;
}

/* Background colors */
.gray_background {
  background-color: rgba(120, 129, 145, 0.2);
}

.brown_background {
  background-color: rgba(110, 60, 60, 0.2);
}

.orange_background {
  background-color: rgba(183, 110, 95, 0.2);
}

.yellow_background {
  background-color: rgba(176, 152, 93, 0.2);
}

.green_background {
  background-color: rgba(75, 169, 111, 0.2);
}

.blue_background {
  background-color: rgba(88, 121, 176, 0.2);
}

.purple_background {
  background-color: rgba(138, 96, 181, 0.2);
}

.pink_background {
  background-color: rgba(194, 86, 146, 0.2);
}

.red_background {
  background-color: rgba(170, 83, 99, 0.2);
}
</style>
