import type { Meta, StoryObj } from '@storybook/vue3'

import Linktext from './elm-link-text.vue'

const meta: Meta<typeof Linktext> = {
  component: Linktext,
  title: 'Components/Typography/elm-link-text',
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Linktext>

export const Primary: Story = {
  args: {
    text: 'Link Text',
    href: '/host'
  }
}

export const External: Story = {
  args: {
    text: 'Link Text (External)',
    href: 'https://example.com'
  }
}
