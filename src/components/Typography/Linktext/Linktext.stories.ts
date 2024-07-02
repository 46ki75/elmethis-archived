import type { Meta, StoryObj } from '@storybook/vue3'

import Linktext from './Linktext.vue'

const meta: Meta<typeof Linktext> = {
  component: Linktext,
  title: 'Typography/Linktext',
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
