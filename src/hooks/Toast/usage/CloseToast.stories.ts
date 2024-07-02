import { Meta, StoryObj } from '@storybook/vue3'

import CloseToast from './CloseToast.vue'

export default {
  component: CloseToast,
  title: 'Hooks/Toast/CloseToast',
  argTypes: {}
} as Meta

type Story = StoryObj<typeof CloseToast>

export const Primary: Story = {
  args: {}
}
