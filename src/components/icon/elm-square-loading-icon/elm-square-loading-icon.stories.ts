import { Meta, StoryObj } from '@storybook/vue3'

import SquareLoadingIcon from './elm-square-loading-icon.vue'

export default {
  component: SquareLoadingIcon,
  title: 'Components/Icon/elm-square-loading-icon',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof SquareLoadingIcon>

export const Primary: Story = {
  args: {
    size: 64
  }
}

export const Tiny: Story = {
  args: {
    size: 16
  }
}

export const Small: Story = {
  args: {
    size: 32
  }
}

export const Large: Story = {
  args: {
    size: 128
  }
}

export const Colored: Story = {
  args: {
    color: 'darkgreen'
  }
}
