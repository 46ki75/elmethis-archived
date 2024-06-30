<template>
  <div v-if="isLoading" class="loading">
    <div
      class="loading-container"
      :style="{
        aspectRatio: `${width} / ${height}`,
        width: width + 'px',
        height: height + 'px'
      }"
    >
      <DotLoadingIcon :size="min([width / 2, height / 2])" />

      <div
        class="abs"
        :style="{
          width: width + 'px',
          height: height + 'px'
        }"
      ></div>
    </div>
  </div>

  <img
    class="image"
    :src="isError ? 'noimage.webp' : src"
    :alt="alt"
    :style="
      isLoading
        ? { marginBottom: margin ?? 0, width: 0, height: 0, opacity: 0 }
        : {
            marginBottom: margin ?? 0,
            width: width + 'px',
            height: height + 'px',
            opacity: 1
          }
    "
    @load="isLoading = false"
    @error="isError = true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { min } from 'lodash-es'
import DotLoadingIcon from '../icons/DotLoadingIcon.vue'

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
  { alt: '', width: 128, height: 128 }
)
</script>

<style scoped lang="scss">
@keyframes square {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.image {
  width: 100%;
  user-select: none;

  transition: opacity 0.3s;
}

.loading {
  display: grid;
  width: 100%;

  div.loading-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: dashed 1px rgba(0, 0, 0, 0.2);

    div.abs {
      position: absolute;

      border: solid 1px rgba(0, 0, 0, 0.8);

      animation-name: square;
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-out;
    }
  }
}
</style>
