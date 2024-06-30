<template>
  <div v-if="isLoading" class="loading">
    <div>
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
import GridLoadingIcon from '../icons/GridLoadingIcon.vue'
import { useMagicKeys } from '@vueuse/core'

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
  }>(),
  { alt: '' }
)

const isModalShown = ref<boolean>(false)

const { escape } = useMagicKeys()
watch(escape, (isKeyDown) => {
  if (isKeyDown) isModalShown.value = false
})
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
    aspect-ratio: 1200 / 630;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border: solid 1px rgba(0, 0, 0, 0.2);
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
