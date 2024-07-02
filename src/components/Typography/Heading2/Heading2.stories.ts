import type { Meta, StoryObj } from '@storybook/vue3'

import Heading2 from './Heading2.vue'

const meta: Meta<typeof Heading2> = {
  component: Heading2,
  title: 'Components/Typography/Heading2',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Heading2>

export const Primary: Story = {
  args: {
    content: 'Heading2',
    size: '1.375rem'
  }
}

export const Scroll: Story = {
  render: (args) => ({
    components: { Heading2 },
    setup() {
      return { args }
    },
    template: `<Heading2 v-for="i in 30" :key="i" :content="'Heading2 - ' + i" />`
  })
}
