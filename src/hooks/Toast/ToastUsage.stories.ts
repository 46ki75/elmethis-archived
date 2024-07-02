import { Meta, StoryObj } from '@storybook/vue3'

import ToastUsage from './ToastUsage.vue'

export default {
  component: ToastUsage,
  title: 'Hooks/Toast',
  argTypes: {}
} as Meta

type Story = StoryObj<typeof ToastUsage>

export const Primary: Story = {
  args: {}
}
