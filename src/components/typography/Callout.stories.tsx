import type { Meta, StoryObj } from '@storybook/vue3'

import Callout from './Callout.vue'
import { colors } from '../../colors'

const meta: Meta<typeof Callout> = {
  component: Callout,
  title: 'Typography/Callout',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: Object.keys(colors)
    }
  }
}

export default meta
type Story = StoryObj<typeof Callout>

const Template = (args: any) => ({
  components: { Callout },
  setup() {
    return { args }
  },
  template: `
    <Callout v-bind="args">
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Callout>
  `
})

export const Primary: Story = {
  render: Template,
  args: {
    color: 'green',
    title: 'Title of Callout Block'
  }
}

export const Dark: Story = {
  render: Template,
  args: {
    color: 'green',
    title: 'Title of Callout Block',
    theme: 'dark'
  }
}

export const Closable: Story = {
  render: Template,
  args: {
    color: 'green',
    title: 'Title of Callout Block',
    closable: true
  }
}
