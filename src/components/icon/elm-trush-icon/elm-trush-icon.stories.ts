import type { Meta, StoryObj } from '@storybook/vue3'

import TrushIcon from './elm-trush-icon.vue'

const meta: Meta<typeof TrushIcon> = {
  component: TrushIcon,
  title: 'Components/Icon/elm-trush-icon',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof TrushIcon>

export const Primary: Story = {
  args: {
    size: 64
  }
}

export const Tiny: Story = {
  args: {
    size: 16
  }
}

export const Small: Story = {
  args: {
    size: 32
  }
}

export const Large: Story = {
  args: {
    size: 128
  }
}
