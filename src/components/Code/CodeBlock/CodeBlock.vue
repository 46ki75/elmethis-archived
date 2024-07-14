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
      ><code :class="`language-rust`">{{ code.trim() }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from 'prismjs'

import { onMounted, ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import DotLoadingIcon from '../../Icons/DotLoadingIcon/DotLoadingIcon.vue'
import TurnText from '../../Text/TurnText/TurnText.vue'

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

<style lang="scss">
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
    padding: 0.55rem 0.75rem 0.25rem 0.75rem;
    margin: 0;
    border-radius: 0.25rem 0.25rem 0 0;

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

  .fallback {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
}

// # --------------------------------------------------------------------------------
//
// DARK
//
// # --------------------------------------------------------------------------------

/**
 * One Dark theme for prism.js
 * Based on Atom's One Dark theme: https://github.com/atom/atom/tree/master/packages/one-dark-syntax
 */

/**
 * One Dark colours (accurate as of commit 8ae45ca on 6 Sep 2018)
 * From colors.less
 * --mono-1: hsl(220, 14%, 71%);
 * --mono-2: hsl(220, 9%, 55%);
 * --mono-3: hsl(220, 10%, 40%);
 * --hue-1: hsl(187, 47%, 55%);
 * --hue-2: hsl(207, 82%, 66%);
 * --hue-3: hsl(286, 60%, 67%);
 * --hue-4: hsl(95, 38%, 62%);
 * --hue-5: hsl(355, 65%, 65%);
 * --hue-5-2: hsl(5, 48%, 51%);
 * --hue-6: hsl(29, 54%, 61%);
 * --hue-6-2: hsl(39, 67%, 69%);
 * --syntax-fg: hsl(220, 14%, 71%);
 * --syntax-bg: hsl(220, 13%, 18%);
 * --syntax-gutter: hsl(220, 14%, 45%);
 * --syntax-guide: hsla(220, 14%, 71%, 0.15);
 * --syntax-accent: hsl(220, 100%, 66%);
 * From syntax-variables.less
 * --syntax-selection-color: hsl(220, 13%, 28%);
 * --syntax-gutter-background-color-selected: hsl(220, 13%, 26%);
 * --syntax-cursor-line: hsla(220, 100%, 80%, 0.04);
 */
.elmethis-codeblock-container-dark {
  code[class*='language-'],
  pre[class*='language-'] {
    background: hsl(220, 13%, 18%);
    color: hsl(220, 14%, 71%);
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: 'Courier Prime', 'Fira Code', 'Fira Mono', Menlo, Consolas,
      'DejaVu Sans Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Selection */
  code[class*='language-']::-moz-selection,
  code[class*='language-'] *::-moz-selection,
  pre[class*='language-'] *::-moz-selection {
    background: hsl(220, 13%, 28%);
    color: inherit;
    text-shadow: none;
  }

  code[class*='language-']::selection,
  code[class*='language-'] *::selection,
  pre[class*='language-'] *::selection {
    background: hsl(220, 13%, 28%);
    color: inherit;
    text-shadow: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.2em 0.3em;
    border-radius: 0.3em;
    white-space: normal;
  }

  /* Print */
  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: hsl(220, 10%, 40%);
  }

  .token.doctype,
  .token.punctuation,
  .token.entity {
    color: hsl(220, 14%, 71%);
  }

  .token.attr-name,
  .token.class-name,
  .token.boolean,
  .token.constant,
  .token.number,
  .token.atrule {
    color: hsl(29, 54%, 61%);
  }

  .token.keyword {
    color: hsl(286, 60%, 67%);
  }

  .token.property,
  .token.tag,
  .token.symbol,
  .token.deleted,
  .token.important {
    color: hsl(355, 65%, 65%);
  }

  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.regex,
  .token.attr-value,
  .token.attr-value > .token.punctuation {
    color: hsl(95, 38%, 62%);
  }

  .token.variable,
  .token.operator,
  .token.function {
    color: hsl(207, 82%, 66%);
  }

  .token.url {
    color: hsl(187, 47%, 55%);
  }

  /* HTML overrides */
  .token.attr-value > .token.punctuation.attr-equals,
  .token.special-attr > .token.attr-value > .token.value.css {
    color: hsl(220, 14%, 71%);
  }

  /* CSS overrides */
  .language-css .token.selector {
    color: hsl(355, 65%, 65%);
  }

  .language-css .token.property {
    color: hsl(220, 14%, 71%);
  }

  .language-css .token.function,
  .language-css .token.url > .token.function {
    color: hsl(187, 47%, 55%);
  }

  .language-css .token.url > .token.string.url {
    color: hsl(95, 38%, 62%);
  }

  .language-css .token.important,
  .language-css .token.atrule .token.rule {
    color: hsl(286, 60%, 67%);
  }

  /* JS overrides */
  .language-javascript .token.operator {
    color: hsl(286, 60%, 67%);
  }

  .language-javascript
    .token.template-string
    > .token.interpolation
    > .token.interpolation-punctuation.punctuation {
    color: hsl(5, 48%, 51%);
  }

  /* JSON overrides */
  .language-json .token.operator {
    color: hsl(220, 14%, 71%);
  }

  .language-json .token.null.keyword {
    color: hsl(29, 54%, 61%);
  }

  /* MD overrides */
  .language-markdown .token.url,
  .language-markdown .token.url > .token.operator,
  .language-markdown .token.url-reference.url > .token.string {
    color: hsl(220, 14%, 71%);
  }

  .language-markdown .token.url > .token.content {
    color: hsl(207, 82%, 66%);
  }

  .language-markdown .token.url > .token.url,
  .language-markdown .token.url-reference.url {
    color: hsl(187, 47%, 55%);
  }

  .language-markdown .token.blockquote.punctuation,
  .language-markdown .token.hr.punctuation {
    color: hsl(220, 10%, 40%);
    font-style: italic;
  }

  .language-markdown .token.code-snippet {
    color: hsl(95, 38%, 62%);
  }

  .language-markdown .token.bold .token.content {
    color: hsl(29, 54%, 61%);
  }

  .language-markdown .token.italic .token.content {
    color: hsl(286, 60%, 67%);
  }

  .language-markdown .token.strike .token.content,
  .language-markdown .token.strike .token.punctuation,
  .language-markdown .token.list.punctuation,
  .language-markdown .token.title.important > .token.punctuation {
    color: hsl(355, 65%, 65%);
  }

  /* General */
  .token.bold {
    font-weight: bold;
  }

  .token.comment,
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.namespace {
    opacity: 0.8;
  }

  /* Plugin overrides */
  /* Selectors should have higher specificity than those in the plugins' default stylesheets */

  /* Show Invisibles plugin overrides */
  .token.token.tab:not(:empty):before,
  .token.token.cr:before,
  .token.token.lf:before,
  .token.token.space:before {
    color: hsla(220, 14%, 71%, 0.15);
    text-shadow: none;
  }

  /* Toolbar plugin overrides */
  /* Space out all buttons and move them away from the right edge of the code block */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item {
    margin-right: 0.4em;
  }

  /* Styling the buttons */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {
    background: hsl(220, 13%, 26%);
    color: hsl(220, 9%, 55%);
    padding: 0.1em 0.4em;
    border-radius: 0.3em;
  }

  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {
    background: hsl(220, 13%, 28%);
    color: hsl(220, 14%, 71%);
  }

  /* Line Highlight plugin overrides */
  /* The highlighted line itself */
  .line-highlight.line-highlight {
    background: hsla(220, 100%, 80%, 0.04);
  }

  /* Default line numbers in Line Highlight plugin */
  .line-highlight.line-highlight:before,
  .line-highlight.line-highlight[data-end]:after {
    background: hsl(220, 13%, 26%);
    color: hsl(220, 14%, 71%);
    padding: 0.1em 0.6em;
    border-radius: 0.3em;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2); /* same as Toolbar plugin default */
  }

  /* Hovering over a linkable line number (in the gutter area) */
  /* Requires Line Numbers plugin as well */
  pre[id].linkable-line-numbers.linkable-line-numbers
    span.line-numbers-rows
    > span:hover:before {
    background-color: hsla(220, 100%, 80%, 0.04);
  }

  /* Line Numbers and Command Line plugins overrides */
  /* Line separating gutter from coding area */
  .line-numbers.line-numbers .line-numbers-rows,
  .command-line .command-line-prompt {
    border-right-color: hsla(220, 14%, 71%, 0.15);
  }

  /* Stuff in the gutter */
  .line-numbers .line-numbers-rows > span:before,
  .command-line .command-line-prompt > span:before {
    color: hsl(220, 14%, 45%);
  }

  /* Match Braces plugin overrides */
  /* Note: Outline colour is inherited from the braces */
  .rainbow-braces .token.token.punctuation.brace-level-1,
  .rainbow-braces .token.token.punctuation.brace-level-5,
  .rainbow-braces .token.token.punctuation.brace-level-9 {
    color: hsl(355, 65%, 65%);
  }

  .rainbow-braces .token.token.punctuation.brace-level-2,
  .rainbow-braces .token.token.punctuation.brace-level-6,
  .rainbow-braces .token.token.punctuation.brace-level-10 {
    color: hsl(95, 38%, 62%);
  }

  .rainbow-braces .token.token.punctuation.brace-level-3,
  .rainbow-braces .token.token.punctuation.brace-level-7,
  .rainbow-braces .token.token.punctuation.brace-level-11 {
    color: hsl(207, 82%, 66%);
  }

  .rainbow-braces .token.token.punctuation.brace-level-4,
  .rainbow-braces .token.token.punctuation.brace-level-8,
  .rainbow-braces .token.token.punctuation.brace-level-12 {
    color: hsl(286, 60%, 67%);
  }

  /* Diff Highlight plugin overrides */
  /* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
  pre.diff-highlight > code .token.token.deleted:not(.prefix),
  pre > code.diff-highlight .token.token.deleted:not(.prefix) {
    background-color: hsla(353, 100%, 66%, 0.15);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.deleted:not(.prefix)
    *::-moz-selection {
    background-color: hsla(353, 95%, 66%, 0.25);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
    background-color: hsla(353, 95%, 66%, 0.25);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix),
  pre > code.diff-highlight .token.token.inserted:not(.prefix) {
    background-color: hsla(137, 100%, 55%, 0.15);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,
  pre.diff-highlight
    > code
    .token.token.inserted:not(.prefix)
    *::-moz-selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.inserted:not(.prefix)
    *::-moz-selection {
    background-color: hsla(135, 73%, 55%, 0.25);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
    background-color: hsla(135, 73%, 55%, 0.25);
  }

  /* Previewers plugin overrides */
  /* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-dark-ui */
  /* Border around popup */
  .prism-previewer.prism-previewer:before,
  .prism-previewer-gradient.prism-previewer-gradient div {
    border-color: hsl(224, 13%, 17%);
  }

  /* Angle and time should remain as circles and are hence not included */
  .prism-previewer-color.prism-previewer-color:before,
  .prism-previewer-gradient.prism-previewer-gradient div,
  .prism-previewer-easing.prism-previewer-easing:before {
    border-radius: 0.3em;
  }

  /* Triangles pointing to the code */
  .prism-previewer.prism-previewer:after {
    border-top-color: hsl(224, 13%, 17%);
  }

  .prism-previewer-flipped.prism-previewer-flipped.after {
    border-bottom-color: hsl(224, 13%, 17%);
  }

  /* Background colour within the popup */
  .prism-previewer-angle.prism-previewer-angle:before,
  .prism-previewer-time.prism-previewer-time:before,
  .prism-previewer-easing.prism-previewer-easing {
    background: hsl(219, 13%, 22%);
  }

  /* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */
  /* For time, this is the alternate colour */
  .prism-previewer-angle.prism-previewer-angle circle,
  .prism-previewer-time.prism-previewer-time circle {
    stroke: hsl(220, 14%, 71%);
    stroke-opacity: 1;
  }

  /* Stroke colours of the handle, direction point, and vector itself */
  .prism-previewer-easing.prism-previewer-easing circle,
  .prism-previewer-easing.prism-previewer-easing path,
  .prism-previewer-easing.prism-previewer-easing line {
    stroke: hsl(220, 14%, 71%);
  }

  /* Fill colour of the handle */
  .prism-previewer-easing.prism-previewer-easing circle {
    fill: transparent;
  }
}

// # --------------------------------------------------------------------------------
//
// LIGHT
//
// # --------------------------------------------------------------------------------

/**
 * One Light theme for prism.js
 * Based on Atom's One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax
 */

/**
 * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)
 * From colors.less
 * --mono-1: hsl(230, 8%, 24%);
 * --mono-2: hsl(230, 6%, 44%);
 * --mono-3: hsl(230, 4%, 64%)
 * --hue-1: hsl(198, 99%, 37%);
 * --hue-2: hsl(221, 87%, 60%);
 * --hue-3: hsl(301, 63%, 40%);
 * --hue-4: hsl(119, 34%, 47%);
 * --hue-5: hsl(5, 74%, 59%);
 * --hue-5-2: hsl(344, 84%, 43%);
 * --hue-6: hsl(35, 99%, 36%);
 * --hue-6-2: hsl(35, 99%, 40%);
 * --syntax-fg: hsl(230, 8%, 24%);
 * --syntax-bg: hsl(230, 1%, 98%);
 * --syntax-gutter: hsl(230, 1%, 62%);
 * --syntax-guide: hsla(230, 8%, 24%, 0.2);
 * --syntax-accent: hsl(230, 100%, 66%);
 * From syntax-variables.less
 * --syntax-selection-color: hsl(230, 1%, 90%);
 * --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
 * --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);
 */
.elmethis-codeblock-container-light {
  code[class*='language-'],
  pre[class*='language-'] {
    background: hsl(230, 1%, 98%);
    color: hsl(230, 8%, 24%);
    font-family: 'Courier Prime', 'Fira Code', 'Fira Mono', Menlo, Consolas,
      'DejaVu Sans Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Selection */
  code[class*='language-']::-moz-selection,
  code[class*='language-'] *::-moz-selection,
  pre[class*='language-'] *::-moz-selection {
    background: hsl(230, 1%, 90%);
    color: inherit;
  }

  code[class*='language-']::selection,
  code[class*='language-'] *::selection,
  pre[class*='language-'] *::selection {
    background: hsl(230, 1%, 90%);
    color: inherit;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.2em 0.3em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: hsl(230, 4%, 64%);
  }

  .token.doctype,
  .token.punctuation,
  .token.entity {
    color: hsl(230, 8%, 24%);
  }

  .token.attr-name,
  .token.class-name,
  .token.boolean,
  .token.constant,
  .token.number,
  .token.atrule {
    color: hsl(35, 99%, 36%);
  }

  .token.keyword {
    color: hsl(301, 63%, 40%);
  }

  .token.property,
  .token.tag,
  .token.symbol,
  .token.deleted,
  .token.important {
    color: hsl(5, 74%, 59%);
  }

  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.regex,
  .token.attr-value,
  .token.attr-value > .token.punctuation {
    color: hsl(119, 34%, 47%);
  }

  .token.variable,
  .token.operator,
  .token.function {
    color: hsl(221, 87%, 60%);
  }

  .token.url {
    color: hsl(198, 99%, 37%);
  }

  /* HTML overrides */
  .token.attr-value > .token.punctuation.attr-equals,
  .token.special-attr > .token.attr-value > .token.value.css {
    color: hsl(230, 8%, 24%);
  }

  /* CSS overrides */
  .language-css .token.selector {
    color: hsl(5, 74%, 59%);
  }

  .language-css .token.property {
    color: hsl(230, 8%, 24%);
  }

  .language-css .token.function,
  .language-css .token.url > .token.function {
    color: hsl(198, 99%, 37%);
  }

  .language-css .token.url > .token.string.url {
    color: hsl(119, 34%, 47%);
  }

  .language-css .token.important,
  .language-css .token.atrule .token.rule {
    color: hsl(301, 63%, 40%);
  }

  /* JS overrides */
  .language-javascript .token.operator {
    color: hsl(301, 63%, 40%);
  }

  .language-javascript
    .token.template-string
    > .token.interpolation
    > .token.interpolation-punctuation.punctuation {
    color: hsl(344, 84%, 43%);
  }

  /* JSON overrides */
  .language-json .token.operator {
    color: hsl(230, 8%, 24%);
  }

  .language-json .token.null.keyword {
    color: hsl(35, 99%, 36%);
  }

  /* MD overrides */
  .language-markdown .token.url,
  .language-markdown .token.url > .token.operator,
  .language-markdown .token.url-reference.url > .token.string {
    color: hsl(230, 8%, 24%);
  }

  .language-markdown .token.url > .token.content {
    color: hsl(221, 87%, 60%);
  }

  .language-markdown .token.url > .token.url,
  .language-markdown .token.url-reference.url {
    color: hsl(198, 99%, 37%);
  }

  .language-markdown .token.blockquote.punctuation,
  .language-markdown .token.hr.punctuation {
    color: hsl(230, 4%, 64%);
    font-style: italic;
  }

  .language-markdown .token.code-snippet {
    color: hsl(119, 34%, 47%);
  }

  .language-markdown .token.bold .token.content {
    color: hsl(35, 99%, 36%);
  }

  .language-markdown .token.italic .token.content {
    color: hsl(301, 63%, 40%);
  }

  .language-markdown .token.strike .token.content,
  .language-markdown .token.strike .token.punctuation,
  .language-markdown .token.list.punctuation,
  .language-markdown .token.title.important > .token.punctuation {
    color: hsl(5, 74%, 59%);
  }

  /* General */
  .token.bold {
    font-weight: bold;
  }

  .token.comment,
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.namespace {
    opacity: 0.8;
  }

  /* Plugin overrides */
  /* Selectors should have higher specificity than those in the plugins' default stylesheets */

  /* Show Invisibles plugin overrides */
  .token.token.tab:not(:empty):before,
  .token.token.cr:before,
  .token.token.lf:before,
  .token.token.space:before {
    color: hsla(230, 8%, 24%, 0.2);
  }

  /* Toolbar plugin overrides */
  /* Space out all buttons and move them away from the right edge of the code block */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item {
    margin-right: 0.4em;
  }

  /* Styling the buttons */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {
    background: hsl(230, 1%, 90%);
    color: hsl(230, 6%, 44%);
    padding: 0.1em 0.4em;
    border-radius: 0.3em;
  }

  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {
    background: hsl(230, 1%, 78%); /* custom: darken(--syntax-bg, 20%) */
    color: hsl(230, 8%, 24%);
  }

  /* Line Highlight plugin overrides */
  /* The highlighted line itself */
  .line-highlight.line-highlight {
    background: hsla(230, 8%, 24%, 0.05);
  }

  /* Default line numbers in Line Highlight plugin */
  .line-highlight.line-highlight:before,
  .line-highlight.line-highlight[data-end]:after {
    background: hsl(230, 1%, 90%);
    color: hsl(230, 8%, 24%);
    padding: 0.1em 0.6em;
    border-radius: 0.3em;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2); /* same as Toolbar plugin default */
  }

  /* Hovering over a linkable line number (in the gutter area) */
  /* Requires Line Numbers plugin as well */
  pre[id].linkable-line-numbers.linkable-line-numbers
    span.line-numbers-rows
    > span:hover:before {
    background-color: hsla(230, 8%, 24%, 0.05);
  }

  /* Line Numbers and Command Line plugins overrides */
  /* Line separating gutter from coding area */
  .line-numbers.line-numbers .line-numbers-rows,
  .command-line .command-line-prompt {
    border-right-color: hsla(230, 8%, 24%, 0.2);
  }

  /* Stuff in the gutter */
  .line-numbers .line-numbers-rows > span:before,
  .command-line .command-line-prompt > span:before {
    color: hsl(230, 1%, 62%);
  }

  /* Match Braces plugin overrides */
  /* Note: Outline colour is inherited from the braces */
  .rainbow-braces .token.token.punctuation.brace-level-1,
  .rainbow-braces .token.token.punctuation.brace-level-5,
  .rainbow-braces .token.token.punctuation.brace-level-9 {
    color: hsl(5, 74%, 59%);
  }

  .rainbow-braces .token.token.punctuation.brace-level-2,
  .rainbow-braces .token.token.punctuation.brace-level-6,
  .rainbow-braces .token.token.punctuation.brace-level-10 {
    color: hsl(119, 34%, 47%);
  }

  .rainbow-braces .token.token.punctuation.brace-level-3,
  .rainbow-braces .token.token.punctuation.brace-level-7,
  .rainbow-braces .token.token.punctuation.brace-level-11 {
    color: hsl(221, 87%, 60%);
  }

  .rainbow-braces .token.token.punctuation.brace-level-4,
  .rainbow-braces .token.token.punctuation.brace-level-8,
  .rainbow-braces .token.token.punctuation.brace-level-12 {
    color: hsl(301, 63%, 40%);
  }

  /* Diff Highlight plugin overrides */
  /* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
  pre.diff-highlight > code .token.token.deleted:not(.prefix),
  pre > code.diff-highlight .token.token.deleted:not(.prefix) {
    background-color: hsla(353, 100%, 66%, 0.15);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.deleted:not(.prefix)
    *::-moz-selection {
    background-color: hsla(353, 95%, 66%, 0.25);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
    background-color: hsla(353, 95%, 66%, 0.25);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix),
  pre > code.diff-highlight .token.token.inserted:not(.prefix) {
    background-color: hsla(137, 100%, 55%, 0.15);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,
  pre.diff-highlight
    > code
    .token.token.inserted:not(.prefix)
    *::-moz-selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.inserted:not(.prefix)
    *::-moz-selection {
    background-color: hsla(135, 73%, 55%, 0.25);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
    background-color: hsla(135, 73%, 55%, 0.25);
  }

  /* Previewers plugin overrides */
  /* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-light-ui */
  /* Border around popup */
  .prism-previewer.prism-previewer:before,
  .prism-previewer-gradient.prism-previewer-gradient div {
    border-color: hsl(0, 0%, 95%);
  }

  /* Angle and time should remain as circles and are hence not included */
  .prism-previewer-color.prism-previewer-color:before,
  .prism-previewer-gradient.prism-previewer-gradient div,
  .prism-previewer-easing.prism-previewer-easing:before {
    border-radius: 0.3em;
  }

  /* Triangles pointing to the code */
  .prism-previewer.prism-previewer:after {
    border-top-color: hsl(0, 0%, 95%);
  }

  .prism-previewer-flipped.prism-previewer-flipped.after {
    border-bottom-color: hsl(0, 0%, 95%);
  }

  /* Background colour within the popup */
  .prism-previewer-angle.prism-previewer-angle:before,
  .prism-previewer-time.prism-previewer-time:before,
  .prism-previewer-easing.prism-previewer-easing {
    background: hsl(0, 0%, 100%);
  }

  /* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */
  /* For time, this is the alternate colour */
  .prism-previewer-angle.prism-previewer-angle circle,
  .prism-previewer-time.prism-previewer-time circle {
    stroke: hsl(230, 8%, 24%);
    stroke-opacity: 1;
  }

  /* Stroke colours of the handle, direction point, and vector itself */
  .prism-previewer-easing.prism-previewer-easing circle,
  .prism-previewer-easing.prism-previewer-easing path,
  .prism-previewer-easing.prism-previewer-easing line {
    stroke: hsl(230, 8%, 24%);
  }

  /* Fill colour of the handle */
  .prism-previewer-easing.prism-previewer-easing circle {
    fill: transparent;
  }
}
</style>
