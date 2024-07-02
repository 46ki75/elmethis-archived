import { Meta, StoryObj } from '@storybook/vue3'

import InfoIcon from './InfoIcon.vue'

export default {
  component: InfoIcon,
  title: 'Components/Icons/InfoIcon',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof InfoIcon>

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
