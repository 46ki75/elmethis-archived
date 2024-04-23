<template>
  <div v-if="base64ImageURI === null" class="loading">
    <div :style="{ aspectRatio: `${width} / ${height}` }">
      <GridLoadingIcon :size="32" />
      <span>LOADING</span>
    </div>
  </div>

  <img
    v-else-if="typeof base64ImageURI === 'string'"
    class="image"
    :src="base64ImageURI"
    :alt="alt"
    :style="{ marginBottom: margin ?? 0 }"
  />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import GridLoadingIcon from '../icons/GridLoadingIcon.vue'

const props = withDefaults(
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

const base64ImageURI = ref<string | null>(null)

const fetchImage = async (src: string): Promise<void> => {
  const response = await fetch(src)

  if (response.status === 200) {
    const blob = await response.blob()
    const reader = new FileReader()
    reader.readAsDataURL(blob)

    reader.onloadend = () => {
      const base64data = reader.result
      base64ImageURI.value = String(base64data)
    }
  } else {
    const response = await fetch('/noimage.webp')

    const blob = await response.blob()
    const reader = new FileReader()
    reader.readAsDataURL(blob)

    reader.onloadend = () => {
      const base64data = reader.result
      base64ImageURI.value = String(base64data)
    }

    base64ImageURI.value = null
  }
}

onMounted(() => {
  fetchImage(props.src)
})

watch(
  () => props.src,
  (newsrc: string) => {
    fetchImage(newsrc)
  }
)
</script>

<style scoped lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.image {
  width: 100%;
  user-select: none;

  animation-name: fadeIn;
  animation-fill-mode: both;
  animation-duration: 0.3s;
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
