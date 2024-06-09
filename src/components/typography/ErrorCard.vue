<template>
  <div class="container">
    <div class="headline">{{ headline }}</div>
    <div class="title">{{ title }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    headline?: string
    title?: string
    text?: string
  }>(),
  {
    headline: 'Whoops, 404',
    title: 'Page not found',
    text: 'The page you were looking for does not exist'
  }
)
</script>

<style scoped lang="scss">
.container {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  background-color: rgba(0, 0, 0, 0.03);
}

.headline {
  margin-bottom: 0.5rem;

  font-size: 3rem;
  opacity: 0.5;
  font-weight: bold;
  text-align: center;
}

.title {
  font-size: 1.25em;
  opacity: 0.8;
  font-weight: bold;
  text-align: center;
}

.text {
  font-size: 1em;
  opacity: 0.4;
  text-align: center;
}
</style>
