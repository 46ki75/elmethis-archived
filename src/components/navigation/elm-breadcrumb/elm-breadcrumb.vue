<template>
  <RerenderInView>
    <nav aria-label="Breadcrumb" class="wrapper">
      <ol class="breadcrumb">
        <a
          v-for="(link, index) in links"
          class="link"
          :href="link.href"
          :key="index"
        >
          <li class="li">
            <HomeIcon
              v-if="index === 0"
              class="icon"
              :style="{ animationDelay: 0.15 * index + 's', color: '#449763' }"
            />

            <FolderIcon
              v-if="index !== 0 && index !== links.length - 1"
              class="icon"
              :style="{ animationDelay: 0.15 * index + 's', color: '#4c6da2' }"
            />

            <DocumentTextIcon
              v-if="index === links.length - 1"
              class="icon"
              :style="{ animationDelay: 0.15 * index + 's', color: '#6c7483' }"
            />

            <span
              class="label"
              :style="{ animationDelay: 0.1 + 0.15 * index + 's' }"
              >{{ link.label }}</span
            >

            <ChevronRightIcon
              v-if="index !== links.length - 1"
              class="arrow icon"
              :style="{ animationDelay: 0.2 + 0.15 * index + 's' }"
            />
          </li>
        </a>
      </ol></nav
  ></RerenderInView>
</template>

<script setup lang="ts">
import RerenderInView from '../../utils/elm-rerender-inview/elm-rerender-inview.vue'
import {
  HomeIcon,
  FolderIcon,
  DocumentTextIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/solid'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

defineProps<{
  /**
   * **required!**
   *
   * An array of objects with keys for the URL path and display name label.
   *
   * - href: The URL path to navigate to.
   * - label: The display name.
   */
  links: Array<{
    href: string
    label: string
  }>
}>()
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

.wrapper {
  width: 100%;
  font-family: sans-serif;
}

.breadcrumb {
  all: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0rem;
}

.link {
  all: unset;
  padding: 0.25rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: rgba(226, 233, 243, 0.8);
  }
}

.li {
  all: unset;
  list-style-type: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.icon {
  width: 16px;
  height: 16px;

  animation-name: fade;
  animation-duration: 0.2s;
  animation-fill-mode: both;
  /* animation-delay: ${0.3 * index}s; */
}

.label {
  animation-name: fade;
  animation-duration: 0.2s;
  animation-fill-mode: both;
  /* animation-delay: ${0.1 + 0.3 * index}s; */
}

.arrow {
  animation-name: fade;
  animation-duration: 0.2s;
  animation-fill-mode: both;
  /* animation-delay: ${0.2 + 0.3 * index}s; */
}
</style>
