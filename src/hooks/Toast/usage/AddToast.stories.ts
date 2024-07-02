import { Meta, StoryObj } from '@storybook/vue3'

import AddToast from './AddToast.vue'

export default {
  component: AddToast,
  title: 'Hooks/Toast/AddToast',
  argTypes: {}
} as Meta

type Story = StoryObj<typeof AddToast>

export const Primary: Story = {
  args: {}
}
