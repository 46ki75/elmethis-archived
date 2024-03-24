import { Meta, StoryObj } from '@storybook/vue3'

import FragmentIdentifier from './FragmentIdentifier.vue'

export default {
  component: FragmentIdentifier,
  title: 'Typography/FragmentIdentifier',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof FragmentIdentifier>

export const Primary: Story = {
  args: {
    content: 'SampleIdentifier'
  }
}
