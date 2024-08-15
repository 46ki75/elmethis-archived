<template>
  <div
    :class="{
      'elmethis-codeblock-container': true,
      'elmethis-codeblock-container-light': theme === 'light',
      'elmethis-codeblock-container-dark': theme === 'dark'
    }"
    :style="{ marginBottom: margin ?? 0 }"
  >
    <div
      class="elmethis-codeblock-header"
      :style="{
        background:
          theme === 'light' ? 'rgb(250, 250, 250)' : 'rgb(40, 44, 52)',

        color:
          theme === 'light' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'
      }"
    >
      <div class="caption">
        <CodeBracketIcon style="width: 16px; height: 16px" />
        <span>{{ caption ?? language }}</span>
      </div>

      <div
        class="copy"
        @click="
          () => {
            copy(code)
          }
        "
      >
        <span
          :style="{
            opacity: copied ? 1 : 0,
            color: theme === 'light' ? 'rgb(40, 44, 52)' : 'rgb(250, 250, 250)'
          }"
        >
          Source code copied!
        </span>
        <div class="copy-icon">
          <ClipboardDocumentIcon v-if="!copied" />
          <ClipboardDocumentCheckIcon v-else-if="copied" />
        </div>
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
      <div
        v-if="isLoading"
        class="fallback"
        :style="{
          background:
            theme === 'light' ? 'rgb(250, 250, 250)' : 'rgb(40, 44, 52)',

          color:
            theme === 'light'
              ? 'rgba(0, 0, 0, 0.8)'
              : 'rgba(255, 255, 255, 0.8)'
        }"
      >
        <DotLoadingIcon
          :size="32"
          :color="
            theme === 'light'
              ? 'rgba(0, 0, 0, 0.8)'
              : 'rgba(255, 255, 255, 0.8)'
          "
        />
        <TurnText
          :size="16"
          :color="
            theme === 'light'
              ? 'rgba(0, 0, 0, 0.8)'
              : 'rgba(255, 255, 255, 0.8)'
          "
          text="LOADING"
        />
      </div>
      <pre
        v-else
        class="code"
      ><code :class="`language-${language}`">{{ code.trim() }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from 'prismjs'

import './prism-one-light.scss'
import './prism-one-dark.scss'

import { onMounted, ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import DotLoadingIcon from '../../icon/elm-dot-loading-icon/elm-dot-loading-icon.vue'
import TurnText from '../../text/elm-turn-text/elm-turn-text.vue'

import {
  CodeBracketIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/vue/24/outline'

declare module 'prismjs/components/prism-rust' {
  export function highlightAll(): void
}

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

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

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

const { copy, copied } = useClipboard({ source: props.code })
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  // if (props.theme === 'light') {
  //   await import('./prism-one-light.scss')
  // } else {
  //   await import('./prism-one-dark.scss')
  // }

  switch (props.language) {
    case 'abap':
      await import('prismjs/components/prism-abap')
      break

    case 'bash':
    case 'sh':
    case 'shell':
      await import('prismjs/components/prism-bash')
      break

    case 'basic':
      await import('prismjs/components/prism-basic')
      break

    case 'bnf':
      await import('prismjs/components/prism-bnf')
      break

    case 'c':
      await import('prismjs/components/prism-c')
      break

    case 'csharp':
    case 'cs':
      await import('prismjs/components/prism-csharp')
      break

    case 'cpp':
      await import('prismjs/components/prism-cpp')
      break

    case 'clojure':
      await import('prismjs/components/prism-clojure')
      break

    case 'coffeescript':
      await import('prismjs/components/prism-coffeescript')
      break

    case 'coq':
      await import('prismjs/components/prism-coq')
      break

    case 'css':
      await import('prismjs/components/prism-css')
      break

    case 'dart':
      await import('prismjs/components/prism-dart')
      break

    case 'dhall':
      await import('prismjs/components/prism-dhall')
      break

    case 'diff':
      await import('prismjs/components/prism-diff')
      break

    case 'ebnf':
      await import('prismjs/components/prism-ebnf')
      break

    case 'elixir':
      await import('prismjs/components/prism-elixir')
      break

    case 'elm':
      await import('prismjs/components/prism-elm')
      break

    case 'erlang':
      await import('prismjs/components/prism-erlang')
      break

    case 'fsharp':
      await import('prismjs/components/prism-fsharp')
      break

    case 'json':
      await import('prismjs/components/prism-json')
      break

    case 'yaml':
    case 'yml':
      await import('prismjs/components/prism-yaml')
      break

    case 'toml':
      await import('prismjs/components/prism-toml')
      break

    case 'xml':
      await import('prismjs/components/prism-xml-doc')
      break

    case 'makefile':
    case 'mf':
      await import('prismjs/components/prism-makefile')
      break

    case 'markdown':
    case 'md':
      await import('prismjs/components/prism-markdown')
      break

    case 'mermaid':
      await import('prismjs/components/prism-mermaid')
      break

    case 'markup':
    case 'html':
      await import('prismjs/components/prism-markup')
      break

    case 'java':
      await import('prismjs/components/prism-java')
      break

    case 'javascript':
    case 'js':
      await import('prismjs/components/prism-javascript')
      break

    case 'typescript':
    case 'ts':
      await import('prismjs/components/prism-typescript')
      break

    case 'kotlin':
    case 'kt':
      await import('prismjs/components/prism-kotlin')
      break

    case 'go':
    case 'golang':
      await import('prismjs/components/prism-go')
      break

    case 'python':
    case 'py':
      await import('prismjs/components/prism-python')
      break

    case 'rust':
    case 'rs':
      await import('prismjs/components/prism-rust')
      break

    case 'hcl':
      await import('prismjs/components/prism-hcl')
      break
  }

  isLoading.value = false

  const timerID = setTimeout(() => {
    Prism.highlightAll()
    clearTimeout(timerID)
  }, 0)
})
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

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

.elmethis-codeblock-container,
.elmethis-codeblock-container-light,
.elmethis-codeblock-container-dark {
  .elmethis-codeblock-header {
    box-sizing: border-box;
    width: 100%;
    padding: 0.25rem 0.75rem;
    margin: 0;
    border-radius: 0.25rem 0.25rem 0 0;

    font-size: 0.8em;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    div.caption {
      height: 2.5rem;
      font-size: 1rem;
      line-height: 1.5rem;

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
        border-radius: 0.125rem;
        transition: all 0.1s;
      }
    }
  }

  .copy-icon {
    width: 20px;
    height: 20px;

    &:hover {
      opacity: 0.5;
      background-color: rgba(128, 128, 128, 0.05);
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

  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
  .code {
    margin: 0;
    animation: fade 0.2s both;
    border-radius: 0 0 0.25rem 0.25rem;
  }

  .fallback {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
