<template>
  <RerenderInView>
    <div class="upper">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h3
      class="heading"
      :style="{ fontSize: typeof size === 'string' ? size : size + 'px' }"
      :id="content"
    >
      <span>{{ content }}</span>
    </h3>
    <div class="under">
      <div></div>
    </div>
    <FragmentIdentifier :content="content" :margin="margin" />
  </RerenderInView>
</template>

<script setup lang="ts">
import RerenderInView from '../../utils/elm-rerender-inview/elm-rerender-inview.vue'
import FragmentIdentifier from '../elm-fragment-identifier/elm-fragment-identifier.vue'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

withDefaults(
  defineProps<{
    content: string
    size?: number | string
    /**
     * **optional?**
     *
     * This is the margin on the bottom side of the element.
     * If not specified, it defaults to 0.
     */
    margin?: string
  }>(),
  { size: '1.375rem' }
)
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

.upper {
  display: flex;
  flex-direction: row;
  div:nth-of-type(1) {
    width: 3px;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.9);
  }

  div:nth-of-type(2) {
    width: 64px;
    height: 1px;
    border-top: dashed 1px rgba(0, 0, 0, 0.9);
    opacity: 0.3;
  }

  div:nth-of-type(3) {
    width: 128px;
    height: 1px;
    border-top: dotted 1px rgba(0, 0, 0, 0.9);
    opacity: 0.2;
  }
}

@keyframes in {
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateY(0px);
  }
}

.heading {
  margin: 0;
  position: relative;
  overflow: hidden;

  span {
    display: inline-block;
    animation-name: in;
    animation-duration: 0.25s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
  }

  &::selection {
    background: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 0.8);
  }

  &::after {
    position: absolute;
    content: '';
    right: 2px;
    bottom: 0;
    width: 6px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0.8;
    transform: skewX(-25deg);
  }

  &::before {
    position: absolute;
    content: '';
    right: 10px;
    bottom: 0;
    width: 6px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0.8;
    transform: skewX(-25deg);
  }
}

@keyframes line {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.under {
  width: 100%;
  margin-top: 2px;
  border-top: solid 1px rgba(0, 0, 0, 0.9);

  animation-name: line;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;

  div {
    width: 16px;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.9);
  }
}
</style>
