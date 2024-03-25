import { Meta, StoryObj } from '@storybook/vue3'

import TriangleLoadingIcon from './TriangleLoadingIcon.vue'

export default {
  component: TriangleLoadingIcon,
  title: 'Icons/TriangleLoadingIcon',
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
