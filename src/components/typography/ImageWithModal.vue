<template>
  <img
    v-if="typeof base64ImageURI === 'string'"
    class="image"
    :src="base64ImageURI"
    :alt="alt"
    @click="() => (isModalShown = true)"
  />

  <div v-if="base64ImageURI === null" class="loading">
    <GridLoadingIcon :size="32" />
    <span>LOADING</span>
  </div>

  <Teleport to="body">
    <div
      class="modal"
      :style="{
        background: `rgba(0, 0, 0, ${isModalShown ? 0.6 : 0})`,
        backdropFilter: `blur(${isModalShown ? '0.125rem' : '0rem'})`,
        pointerEvents: isModalShown ? 'all' : 'none'
      }"
      @click="() => (isModalShown = false)"
    >
      <img
        v-if="base64ImageURI != null"
        :src="base64ImageURI"
        :alt="alt"
        :style="{ opacity: isModalShown ? 1 : 0 }"
      /></div
  ></Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import GridLoadingIcon from '../icons/GridLoadingIcon.vue'
import { useMagicKeys } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
  }>(),
  { alt: '' }
)

const isModalShown = ref<boolean>(false)

const base64ImageURI = ref<string | null>(null)

const fetchImage = async (src: string): Promise<void> => {
  const response = await fetch(src)
  const blob = await response.blob()

  const reader = new FileReader()
  reader.readAsDataURL(blob)
  reader.onloadend = function () {
    const base64data = reader.result

    if (typeof base64data === 'string') {
      base64ImageURI.value = base64data
    } else {
      base64ImageURI.value = null
    }
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

const { escape } = useMagicKeys()
watch(escape, (isKeyDown) => {
  if (isKeyDown) isModalShown.value = false
})
</script>

<style scoped>
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
  cursor: zoom-in;

  animation-name: fadeIn;
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.loading {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.modal {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  /* background-color: rgba(0, 0, 0, ${isModalShown ? 0.6 : 0}); */
  /* backdrop-filter: blur(${isModalShown ? '0.125rem' : '0rem'}); */
  transition: all 0.2s;

  /* pointer-events: ${isModalShown ? 'all' : 'none'}; */

  user-select: none;
  cursor: zoom-out;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    transition: all 0.2s;
    /* opacity: ${isModalShown ? 1 : 0}; */
  }
}
</style>
