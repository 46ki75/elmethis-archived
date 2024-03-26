<template>
  <div v-for="dom in domjson">
    <BookmarkCard
      v-if="dom.type === 'bookmark'"
      :url="dom.url ?? ''"
      :image="dom.bookmark?.image"
      :title="dom.bookmark?.title ?? dom.url ?? ''"
      :description="dom.bookmark?.description ?? ''"
    />
  </div>
</template>

<script setup lang="ts">
import BookmarkCard from '../typography/BookmarkCard.vue'
import { type DOMJSON } from 'notion-markup-utils/dist/block/DOMJSON'

defineProps<{
  domjson: DOMJSON[]
}>()
</script>

<style scoped lang="scss"></style>
