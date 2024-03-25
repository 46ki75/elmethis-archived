import type { Meta, StoryObj } from '@storybook/vue3'

import Divider from './Divider.vue'

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Typography/Divider',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Divider>

export const Primary: Story = {
  args: {
    text: 'End of Contents'
  }
}

export const NoText: Story = {
  args: {}
}
