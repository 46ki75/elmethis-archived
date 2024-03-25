import { Meta, StoryObj } from '@storybook/vue3'

import ConnectionIcon from './ConnectionIcon.vue'

export default {
  component: ConnectionIcon,
  title: 'Icons/ConnectionIcon',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof ConnectionIcon>

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
