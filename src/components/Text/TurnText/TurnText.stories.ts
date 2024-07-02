import { Meta, StoryObj } from '@storybook/vue3'

import TurnText from './TurnText.vue'

export default {
  component: TurnText,
  title: 'Components/Text/TurnText',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof TurnText>

export const Primary: Story = {
  args: {
    size: 64,
    text: 'LOADING'
  }
}

export const Tiny: Story = {
  args: {
    size: 16,
    text: 'LOADING'
  }
}

export const Small: Story = {
  args: {
    size: 32,
    text: 'LOADING'
  }
}

export const Large: Story = {
  args: {
    size: 128,
    text: 'LOADING'
  }
}
