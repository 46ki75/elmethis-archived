<template>
  <div v-if="isLoading" class="loading">
    <div :style="{ aspectRatio: `${width} / ${height}` }">
      <GridLoadingIcon :size="32" />
      <span>LOADING</span>
    </div>
  </div>

  <img
    class="image"
    :src="isError ? 'noimage.webp' : src"
    :alt="alt"
    :style="
      isLoading
        ? { marginBottom: margin ?? 0, width: 0, height: 0, opacity: 0 }
        : { marginBottom: margin ?? 0, opacity: 1 }
    "
    @load="isLoading = false"
    @error="isError = true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GridLoadingIcon from '../icons/GridLoadingIcon.vue'

const isLoading = ref(true)
const isError = ref(false)

withDefaults(
  defineProps<{
    src: string
    alt?: string
    /**
     * **optional?**
     *
     * This is the margin on the bottom side of the element.
     * If not specified, it defaults to 0.
     */
    margin?: string
    /**
     * **optional?**
     *
     * Width of fallback image. Converted to aspect ratio for use.
     * ```ts
     * { aspectRatio: `${width} / ${height}` }
     * ```
     */
    width?: number
    /**
     * **optional?**
     *
     * Height of fallback image. Converted to aspect ratio for use.
     * ```ts
     * { aspectRatio: `${width} / ${height}` }
     * ```
     */
    height?: number
  }>(),
  { alt: '', width: 1200, height: 630 }
)
</script>

<style scoped lang="scss">
.image {
  width: 100%;
  user-select: none;

  transition: opacity 0.3s;
}

.loading {
  display: grid;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border: solid 1px rgba(0, 0, 0, 0.2);
  }
}
</style>
