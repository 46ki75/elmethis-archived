<template>
  <div class="container" :style="{ marginBottom: margin ?? 0 }">
    <span :style="{ opacity: copied ? 1 : 0 }" class="message">
      A link with a fragment identifier has been copied.
    </span>
    <a :href="'#' + content">
      <LinkIcon class="icon" />
    </a>

    <ClipboardDocumentIcon class="icon" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
import { LinkIcon, ClipboardDocumentIcon } from '@heroicons/vue/24/outline'
import { useClipboard } from '@vueuse/core'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

const props = defineProps<{
  /**
   * **required!**
   *
   * This becomes the fragment identifier that is appended to the end of the URL.
   * For example, when set to `content={'Heading'}` at `example.com/path/to/page`,
   * it becomes `https://example.com/path/to/page#Heading`.
   */
  content: string
  /**
   * **optional?**
   *
   * This is the margin on the bottom side of the element.
   * If not specified, it defaults to 0.
   */
  margin?: string
}>()

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

const { copied, copy } = useClipboard()

const handleClick = () => {
  const currentUrl = window.location.href
  const urlWithoutHash = currentUrl.split('#')[0]

  copy(urlWithoutHash + '#' + props.content)
}
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

.container {
  margin: 0;
  margin-top: 0.25rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: top;
  gap: 0.5rem;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;

  color: #446190;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
}

.message {
  font-size: 0.5rem;
  font-family: sans-serif;
  user-select: none;
  /* opacity: ${isVisible ? 1 : 0}; */
  transition: all 0.3s;
}
</style>
