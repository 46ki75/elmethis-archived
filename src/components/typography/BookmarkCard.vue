<template>
  <nav :style="{ marginBottom: margin ?? 0 }">
    <a class="wrapper" :href="url" target="_blank" rel="noreferrer noopener">
      <img class="img" :src="image" alt="OGP Image" />
      <div class="typography-container">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
        <div class="url">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            opacity="0.4"
            viewBox="0 0 512 512"
          >
            <path
              d="M326.6 185.4c59.7 59.8 58.9 155.7 .4 214.6-.1 .1-.2 .3-.4 .4l-67.2 67.2c-59.3 59.3-155.7 59.3-215 0-59.3-59.3-59.3-155.7 0-215l37.1-37.1c9.8-9.8 26.8-3.3 27.3 10.6 .6 17.7 3.8 35.5 9.7 52.7 2 5.8 .6 12.3-3.8 16.6l-13.1 13.1c-28 28-28.9 73.7-1.2 102 28 28.6 74.1 28.7 102.3 .5l67.2-67.2c28.2-28.2 28.1-73.8 0-101.8-3.7-3.7-7.4-6.6-10.3-8.6a16 16 0 0 1 -6.9-12.6c-.4-10.6 3.3-21.5 11.7-29.8l21.1-21.1c5.5-5.5 14.2-6.2 20.6-1.7a152.5 152.5 0 0 1 20.5 17.2zM467.5 44.4c-59.3-59.3-155.7-59.3-215 0l-67.2 67.2c-.1 .1-.3 .3-.4 .4-58.6 58.9-59.4 154.8 .4 214.6a152.5 152.5 0 0 0 20.5 17.2c6.4 4.5 15.1 3.8 20.6-1.7l21.1-21.1c8.4-8.4 12.1-19.2 11.7-29.8a16 16 0 0 0 -6.9-12.6c-2.9-2-6.6-4.9-10.3-8.6-28.1-28.1-28.2-73.6 0-101.8l67.2-67.2c28.2-28.2 74.3-28.1 102.3 .5 27.8 28.3 26.9 73.9-1.2 102l-13.1 13.1c-4.4 4.4-5.8 10.8-3.8 16.6 5.9 17.2 9 35 9.7 52.7 .5 13.9 17.5 20.4 27.3 10.6l37.1-37.1c59.3-59.3 59.3-155.7 0-215z"
            />
          </svg>
          <span>{{ url }}</span>
        </div>
      </div>
    </a>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * **required!**
   *
   * Website title
   */
  title: string
  /**
   * **required!**
   *
   * Website description
   */
  description: string
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
</script>

<style scoped lang="scss">
.wrapper {
  all: unset;
  cursor: pointer;

  font-family: sans-serif;

  display: flex;
  flex-direction: column;

  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;

  background-color: rgba(255, 255, 255, 0.7);

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
}
</style>
