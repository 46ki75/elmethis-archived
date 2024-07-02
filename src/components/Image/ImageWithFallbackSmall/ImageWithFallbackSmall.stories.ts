import { Meta, StoryObj } from '@storybook/vue3'

import ImageWithFallbackSmall from './ImageWithFallbackSmall.vue'

export default {
  component: ImageWithFallbackSmall,
  title: 'Image/ImageWithFallbackSmall',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof ImageWithFallbackSmall>

export const Primary: Story = {
  args: {
    src: 'vite.svg',
    width: 64,
    height: 64
  }
}

export const NotFound: Story = {
  args: {
    src: 'asdf'
  }
}
