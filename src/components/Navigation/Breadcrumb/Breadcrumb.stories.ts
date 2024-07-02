import { Meta, StoryObj } from '@storybook/vue3'

import Breadcrumb from './Breadcrumb.vue'

export default {
  component: Breadcrumb,
  title: 'Components/Navigation/Breadcrumb',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof Breadcrumb>

export const Primary: Story = {
  args: {
    links: [
      { href: '', label: 'Home' },
      { href: '', label: 'Blog' },
      { href: '', label: 'Article' }
    ]
  }
}

export const Deep: Story = {
  args: {
    links: [
      { href: '', label: 'Home' },
      { href: '', label: 'Blog' },
      { href: '', label: 'Category' },
      { href: '', label: 'Diary' },
      { href: '', label: 'Archived' },
      { href: '', label: 'Article' }
    ]
  }
}
