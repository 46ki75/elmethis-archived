<template>
  <a
    :href="href"
    :target="(external ?? false) ? '_blank' : '_top'"
    :rel="(external ?? false) ? 'external noreferrer noopener' : ''"
    class="link"
  >
    {{ text }}
    <!-- <svg
      v-if="external"
      class="blink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="12"
      height="12"
    >
      <path
        d="M432 320H400a16 16 0 0 0 -16 16V448H64V128H208a16 16 0 0 0 16-16V80a16 16 0 0 0 -16-16H48A48 48 0 0 0 0 112V464a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V336A16 16 0 0 0 432 320zM488 0h-128c-21.4 0-32.1 25.9-17 41l35.7 35.7L135 320.4a24 24 0 0 0 0 34L157.7 377a24 24 0 0 0 34 0L435.3 133.3 471 169c15 15 41 4.5 41-17V24A24 24 0 0 0 488 0z"
        fill="#7996d4"
      />
    </svg> -->

    <ArrowTopRightOnSquareIcon v-if="external" class="blink external-icon" />

    <!-- <svg
      v-if="!external"
      class="blink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 512"
      width="6"
      height="16"
    >
      <path
        d="M0 384.7V127.3c0-17.8 21.5-26.7 34.1-14.1l128.7 128.7c7.8 7.8 7.8 20.5 0 28.3L34.1 398.8C21.5 411.4 0 402.5 0 384.7z"
        fill="#7996d4"
      />
    </svg> -->

    <PlayIcon v-if="!external" class="blink internal-icon" />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PlayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/16/solid'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

const props = defineProps<{
  /**
   * **required!**
   *
   * Text displayed in an HTML element.
   */
  text: string
  /**
   * **required!**
   *
   * The URL of the destination after clicking.
   */
  href: string
}>()

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

const external = computed(() => {
  const link = new URL(props.href, window.location.origin)
  return link.hostname !== window.location.hostname
})
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

a.link {
  all: unset;
  font-family: sans-serif;
  color: #5276c2;

  border-bottom: solid 1px rgba(183, 197, 228, 0.5);

  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  padding: 0.125rem 0.25rem 0 0.25rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0% 50%,
    #d8e0f8 50% 100%
  );
  background-size: 100% 200%;
  background-position: 0% 0%;
  background-repeat: no-repeat;

  overflow-wrap: break-word;

  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-bottom: dashed 1px rgba(183, 197, 228, 0);
    border-bottom-color: rgba(183, 197, 228, 0);
    background-position: 0% 100%;
    border-radius: 0.25rem;
  }

  &:active {
    transform: scale(0.95);
  }
}

@keyframes blink {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

.blink {
  animation-name: blink;
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.external-icon {
  width: 1rem;
  height: 1rem;
}

.internal-icon {
  width: 0.75rem;
  height: 0.75rem;
}
</style>
