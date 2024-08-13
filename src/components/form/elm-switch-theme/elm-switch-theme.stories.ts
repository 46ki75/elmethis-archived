import { Meta, StoryObj } from '@storybook/vue3'

import SwitchTheme from './elm-switch-theme.vue'

export default {
  component: SwitchTheme,
  title: 'Components/Form/elm-switch-theme',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof SwitchTheme>

export const Primary: Story = {}
