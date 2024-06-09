import { Meta, StoryObj } from '@storybook/vue3'

import ErrorCard from './ErrorCard.vue'

export default {
  component: ErrorCard,
  title: 'Typography/ErrorCard',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof ErrorCard>

export const Primary: Story = {
  args: {
    headline: 'Whoops, 404',
    title: 'Page not found',
    text: 'The page you were looking for does not exist'
  }
}
