<template>
  <nav :style="{ marginBottom: margin ?? 0 }">
    <a class="wrapper" :href="url" target="_blank" rel="noreferrer noopener">
      <img
        v-if="image != null && isImageAvailable"
        class="img"
        :src="image"
        alt="OGP Image"
        @error="isImageAvailable = false"
      />
      <div class="typography-container">
        <div class="title">
          {{ title.length > 50 ? `${title.substring(0, 50)}...` : title }}
        </div>
        <div class="description">
          {{
            description == '' || description == null
              ? 'No Description Provided'
              : description.length > 200
                ? `${description.substring(0, 200)}...`
                : description
          }}
        </div>
        <div class="url">
          <LinkIcon class="link-icon" />
          <span>{{
            url.length > 50 ? `${url.substring(0, 50)}...` : url
          }}</span>
        </div>
      </div>
    </a>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LinkIcon } from '@heroicons/vue/16/solid'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

defineProps<{
  /**
   * **required!**
   *
   * Website title
   */
  title: string
  /**
   * **optional?**
   *
   * Website description
   */
  description?: string
  /**
   * **required!**
   *
   * Website URL
   */
  url: string
  /**
   * **optional?**
   *
   * OGP image URL
   */
  image?: string
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

const isImageAvailable = ref(true)
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

.wrapper {
  all: unset;
  cursor: pointer;

  font-family: sans-serif;

  display: flex;
  flex-direction: column;

  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;

  background-color: rgba(255, 255, 255, 0.5);

  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.img {
  border-radius: 0.25rem 0.25rem 0 0;

  @media (min-width: 768px) {
    max-height: 150px;
    max-width: 30%;
    border-radius: 0.25rem 0 0 0.25rem;
  }
}

.typography-container {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;

  @media (min-width: 768px) {
    padding: 0.5rem;
    gap: auto;
    justify-content: space-between;
  }
}

.title {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.9);
  font-weight: bold;
}

.description {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.4);
}

.url {
  box-sizing: border-box;
  width: 100%;
  text-align: right;

  font-size: 0.75rem;
  color: rgba(32, 60, 112, 0.6);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.25rem;

  svg.link-icon {
    width: 16px;
    height: 16px;
  }
}
</style>
