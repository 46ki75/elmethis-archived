<template>
  <div v-if="isLoading" class="loading">
    <div
      class="loading-container"
      :style="{ aspectRatio: `${width} / ${height}` }"
    >
      <SquareLoadingIcon :size="64" />
      <TurnText :size="16" text="LOADING IMAGE" />

      <div class="abs"></div>
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
            opacity: 1,
            cursor: isError ? 'auto' : 'zoom-in'
          }
    "
    @click="
      () => {
        if (!isError) isModalShown = true
      }
    "
    @load="isLoading = false"
    @error="isError = true"
  />

  <Teleport to="body">
    <div
      class="modal"
      :style="{
        background: `rgba(0, 0, 0, ${isModalShown ? 0.6 : 0})`,
        pointerEvents: isModalShown ? 'all' : 'none'
      }"
      @click="() => (isModalShown = false)"
    >
      <img
        v-if="!isLoading"
        :src="src"
        :alt="alt"
        :style="{ opacity: isModalShown ? 1 : 0 }"
      /></div
  ></Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import SquareLoadingIcon from '../../Icons/SquareLoadingIcon/SquareLoadingIcon.vue'
import TurnText from '../../Text/TurnText/TurnText.vue'
import { useMagicKeys } from '@vueuse/core'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

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

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

const isLoading = ref(true)
const isError = ref(false)

const isModalShown = ref<boolean>(false)

const { escape } = useMagicKeys()
watch(escape, (isKeyDown) => {
  if (isKeyDown) isModalShown.value = false
})
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

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
    gap: 1.5rem;

    border: dashed 1px rgba(0, 0, 0, 0.2);

    div.abs {
      position: absolute;
      width: 100%;
      height: 100%;

      border: solid 1px rgba(0, 0, 0, 0.8);

      animation-name: square;
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-out;
    }
  }
}

.modal {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  transition: all 0.2s;

  user-select: none;
  cursor: zoom-out;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    transition: all 0.2s;
  }
}
</style>
