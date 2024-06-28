import type { Meta, StoryObj } from '@storybook/vue3'

import TrushIcon from './TrushIcon.vue'

const meta: Meta<typeof TrushIcon> = {
  component: TrushIcon,
  title: 'SVGAnimationIcon/TrushIcon',
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
