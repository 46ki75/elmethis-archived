import { Meta, StoryObj } from '@storybook/vue3'

import ErrorCard from './elm-error-card.vue'

export default {
  component: ErrorCard,
  title: 'Components/Typography/elm-error-card',
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
