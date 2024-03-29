<template>
  <div
    :class="`elmethis-codeblock-container elmethis-codeblock-container-${theme}`"
    :style="{ marginBottom: margin ?? 0 }"
  >
    <div
      class="header"
      :style="{
        background:
          theme === 'light' ? 'rgb(250, 250, 250)' : 'rgb(40, 44, 52)',

        color:
          theme === 'light' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'
      }"
    >
      <div class="caption">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          viewBox="0 0 640 512"
        >
          <path
            d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3 .8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2 .6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7 .8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
            :fill="
              theme === 'light'
                ? 'rgba(0, 0, 0, 0.8)'
                : 'rgba(255, 255, 255, 0.8)'
            "
          />
        </svg>
        {{ caption ?? language }}
      </div>

      <div class="copy" @click="copy(code)">
        <span
          :style="{
            opacity: copied ? 1 : 0,
            color: theme === 'light' ? 'rgb(40, 44, 52)' : 'rgb(250, 250, 250)'
          }"
          >Source code copied!</span
        >
        <svg
          :class="theme === 'light' ? 'hover-light' : 'hover-dark'"
          width="24"
          height="24"
          viewBox="0 0 384 512"
        >
          <path
            d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"
            :style="{
              fill:
                theme === 'light' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)'
            }"
          />
        </svg>
      </div>
    </div>

    <div
      class="hr"
      :style="{
        background: theme === 'light' ? 'rgb(250, 250, 250)' : 'rgb(40, 44, 52)'
      }"
    >
      <hr
        :style="{
          borderBottom: `solid 1px ${
            theme === 'light'
              ? 'rgba(0, 0, 0, 0.15)'
              : 'rgba(255, 255, 255, 0.15)'
          }`
        }"
      />
    </div>

    <div>
      <pre
        class="code"
      ><code :class="`language-rust`">{{ code.trim() }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from 'prismjs'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-hcl'
import { onMounted } from 'vue'
import { useClipboard } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    /**
     * A string of source code that you want to add syntax highlighting to.
     */
    code: string
    /**
     * The language of the source code.
     */
    language?: string
    /**
     * A caption displayed in the title header part of the source code,
     * which is easier to understand if you input a file name or similar.
     * The default value is the same as the language.
     */
    caption?: string
    /**
     * Light theme / Dark theme.
     */
    theme?: 'light' | 'dark'
    /**
     * **optional?**
     *
     * This is the margin on the bottom side of the element.
     * If not specified, it defaults to 0.
     */
    margin?: string
  }>(),
  { theme: 'light', language: 'txt' }
)

const { copy, copied } = useClipboard({ source: props.code })

onMounted(async () => {
  if (props.theme === 'light') {
    await import('./prism-one-light.scss')
  } else {
    await import('./prism-one-dark.scss')
  }
  Prism.highlightAll()
})
</script>

<style scoped lang="scss">
.elmethis-codeblock-container-light,
.elmethis-codeblock-container-dark {
  display: flex;
  flex-direction: column;
  gap: 0;
  justify-content: center;

  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;

  * {
    box-sizing: border-box;
  }

  & > *::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  & > *::-webkit-scrollbar-thumb {
    background-color: rgba(124, 148, 197, 0.8);
    border-radius: 3px;
    opacity: 0.6;
  }

  & > *::-webkit-scrollbar-track {
    background-color: #f3f3f3;
  }
}

.header {
  box-sizing: border-box;
  width: 100%;
  padding: 0.55rem 0.75rem 0.25rem 0.75rem;
  margin: 0;
  border-radius: 0.25rem 0.25rem 0 0;

  font-family: sans-serif;
  font-size: 0.8em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  div.caption {
    font-size: 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::selection {
      background: #b8e7c5;
      color: #000;
    }
  }

  div.copy {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    position: relative;
    transition: 0.1s;

    white-space: nowrap;

    span {
      font-size: 0.75rem;
      transition: all 0.2s;
      user-select: none;
    }

    svg {
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 0.125rem;
      transition: all 0.1s;
    }
  }
}

.hover-light {
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.hover-dark {
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

.hr {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;

  hr {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: calc(100% - 1rem);
    border: none;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@import url('https://fonts.googleapis.com/css2?family=Courier%20Prime');
.code {
  margin: 0;
  animation: fade 0.2s both;
  border-radius: 0 0 0.25rem 0.25rem;
}

.code,
.code * {
  font-family: 'Courier Prime', monospace;
}
</style>
