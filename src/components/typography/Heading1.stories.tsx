import { Meta, StoryObj } from '@storybook/vue3'

import Heading1 from './Heading1.vue'

export default {
  component: Heading1,
  title: 'Typography/Heading1',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof Heading1>

export const Primary: Story = {
  args: {
    content: 'Heading1',
    size: '1.5rem'
  }
}

export const Scroll: Story = {
  render: (args) => ({
    components: { Heading1 },
    setup() {
      return { args }
    },
    template: `<Heading1 v-for="i in 30" :key="i" :content="'Heading3 - ' + i" />`
  }),
  args: {
    content: 'Heading1',
    size: '1.5rem'
  }
}
