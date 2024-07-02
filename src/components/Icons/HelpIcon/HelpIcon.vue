<template>
  <span
    class="icon"
    :style="{
      color:
        theme === 'light' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'
    }"
  ></span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    /**
     * Light theme / Dark theme.
     */
    theme?: 'light' | 'dark'
  }>(),
  { theme: 'light' }
)
</script>

<style scoped lang="scss">
.icon {
  position: relative;
  transition: all 0.08s;
  margin-right: 1.5rem;

  &::after {
    content: '?';

    display: inline-block;
    position: absolute;

    margin: 0 0.25rem;
    padding: 0.125rem;
    top: -0.3rem;
    width: 0.75rem;
    height: 0.75rem;
    font-size: 0.75rem;
    line-height: 0.75rem;
    text-align: center;
    font-weight: bold;

    background-color: rgba(155, 171, 221, 0.3);
    border-radius: 50%;

    cursor: pointer;
  }

  &:hover {
    opacity: 0.5;
  }
}
</style>
