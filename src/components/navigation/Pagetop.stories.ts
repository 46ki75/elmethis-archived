import { Meta, StoryObj } from '@storybook/vue3'

import Pagetop from './Pagetop.vue'

export default {
  component: Pagetop,
  title: 'Navigation/Pagetop',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof Pagetop>

export const Primary: Story = {
  args: {
    position: 'right'
  }
}

export const Scroll: Story = {
  render: () => ({
    components: { Pagetop },
    template: '<Pagetop /><div style="height: 200vh"></div>'
  })
}
