import { Meta, StoryObj } from '@storybook/vue3'

import HelpIcon from './HelpIcon.vue'

export default {
  component: HelpIcon,
  title: 'Icons/HelpIcon',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof HelpIcon>

export const Light: Story = {
  args: {
    theme: 'light'
  }
}

export const Dark: Story = {
  args: {
    theme: 'dark'
  }
}
