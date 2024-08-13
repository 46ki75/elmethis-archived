import { Meta, StoryObj } from '@storybook/vue3'

import HelpIcon from './elm-help-icon.vue'

export default {
  component: HelpIcon,
  title: 'Components/Icon/elm-help-icon',
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
