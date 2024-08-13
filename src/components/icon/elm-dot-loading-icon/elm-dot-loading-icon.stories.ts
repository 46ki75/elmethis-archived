import { Meta, StoryObj } from '@storybook/vue3'

import DotLoadingIcon from './elm-dot-loading-icon.vue'

export default {
  component: DotLoadingIcon,
  title: 'Components/Icon/elm-dot-loading-icon',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof DotLoadingIcon>

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
