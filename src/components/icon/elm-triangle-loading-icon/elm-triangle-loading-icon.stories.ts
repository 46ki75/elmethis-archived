import { Meta, StoryObj } from '@storybook/vue3'

import TriangleLoadingIcon from './elm-triangle-loading-icon.vue'

export default {
  component: TriangleLoadingIcon,
  title: 'Components/Icon/elm-triangle-loading-icon',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof TriangleLoadingIcon>

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
