import { Meta, StoryObj } from '@storybook/vue3'

import FragmentIdentifier from './elm-fragment-identifier.vue'

export default {
  component: FragmentIdentifier,
  title: 'Components/Typography/elm-fragment-identifier',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof FragmentIdentifier>

export const Primary: Story = {
  args: {
    content: 'SampleIdentifier'
  }
}
