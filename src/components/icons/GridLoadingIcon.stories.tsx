import { Meta, StoryObj } from '@storybook/vue3'

import GridLoadingIcon from './GridLoadingIcon.vue'

export default {
  component: GridLoadingIcon,
  title: 'Icons/GridLoadingIcon',
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
