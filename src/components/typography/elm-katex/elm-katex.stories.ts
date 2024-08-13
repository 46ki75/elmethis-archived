import type { Meta, StoryObj } from '@storybook/vue3'

import KaTex from './elm-katex.vue'

const meta: Meta<typeof KaTex> = {
  component: KaTex,
  title: 'Components/Typography/elm-katex',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof KaTex>

export const Primary: Story = {
  args: {
    expression: 'W_q = \\frac{\\lambda}{\\mu (\\mu - \\lambda)}'
  }
}
