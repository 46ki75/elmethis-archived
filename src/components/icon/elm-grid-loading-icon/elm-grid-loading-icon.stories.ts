import { Meta, StoryObj } from '@storybook/vue3'

import GridLoadingIcon from './elm-grid-loading-icon.vue'

export default {
  component: GridLoadingIcon,
  title: 'Components/Icon/elm-grid-loading-icon',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof GridLoadingIcon>

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
