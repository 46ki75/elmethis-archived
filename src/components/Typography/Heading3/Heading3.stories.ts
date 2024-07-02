import type { Meta, StoryObj } from '@storybook/vue3'

import Heading3 from './Heading3.vue'

const meta: Meta<typeof Heading3> = {
  component: Heading3,
  title: 'Typography/Heading3',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Heading3>

export const Primary: Story = {
  args: {
    content: 'Heading3',
    size: '1.375rem'
  }
}

export const Scroll: Story = {
  render: (args) => ({
    components: { Heading3 },
    setup() {
      return { args }
    },
    template: `<Heading3 v-for="i in 30" :key="i" :content="'Heading3 - ' + i" />`
  })
}
