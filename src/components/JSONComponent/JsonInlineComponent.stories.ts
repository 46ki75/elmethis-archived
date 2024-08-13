import type { Meta, StoryObj } from '@storybook/vue3'

import JsonInlineComponent from './JsonInlineComponent.vue'
import { bold, code, colored, italic, strikethrough } from './inline'

const meta: Meta<typeof JsonInlineComponent> = {
  component: JsonInlineComponent,
  title: 'Components/JSONComponent/JsonInlineComponent',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof JsonInlineComponent>

export const Bold: Story = {
  args: {
    components: bold
  }
}

export const Code: Story = {
  args: {
    components: code
  }
}

export const Colored: Story = {
  args: {
    components: colored
  }
}

export const Italic: Story = {
  args: {
    components: italic
  }
}

export const Strikethrough: Story = {
  args: {
    components: strikethrough
  }
}
