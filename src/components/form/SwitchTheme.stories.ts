import { Meta, StoryObj } from '@storybook/vue3'

import SwitchTheme from './SwitchTheme.vue'

export default {
  component: SwitchTheme,
  title: 'Form/SwitchTheme',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof SwitchTheme>

export const Primary: Story = {}
