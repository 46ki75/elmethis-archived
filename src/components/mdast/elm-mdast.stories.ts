import { Meta, StoryObj } from '@storybook/vue3'

import ElmMarkdown from './elm-markdown.vue'

export default {
  component: ElmMarkdown,
  title: 'Components/mdast/elm-markdown',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof ElmMarkdown>

export const Heading: Story = {
  args: {
    markdown: `# Hello, world!\n\n## Hello, world!\n\n### Hello, world!\n\n#### Hello, world!\n\n##### Hello, world!\n\n###### Hello, world!`
  }
}

export const Inline: Story = {
  args: {
    markdown:
      '**強調**と*斜体*を使って、~~取り消し線~~を追加しながら、[リンク](https://example.com)や`コード`を埋め込み、さらに脚注[^1]を入れることができます。\n\n[^1]: これは脚注の内容です。'
  }
}

export const blockquote: Story = {
  args: {
    markdown: '> Quote!'
  }
}

export const codeblock: Story = {
  args: {
    markdown: '```ts src/index.ts\nconsole.log(1)\n```\n'
  }
}

export const list: Story = {
  args: {
    markdown:
      '- list item A\n- list item B\n- list item C\n\n1. list item A\n2. list item B\n3. list item C\n'
  }
}

export const table: Story = {
  args: {
    markdown: '| A   | B   |\n| --- | --- |\n| A1  | B1  |\n| A2  | B2  |\n'
  }
}

export const divider: Story = {
  args: {
    markdown: '---\n'
  }
}

export const footnote: Story = {
  args: {
    markdown:
      'これは脚注を使った例です。[^1]\n\n' + '[^1]: これは脚注の定義です\n'
  }
}
