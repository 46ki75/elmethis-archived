import { Meta, StoryObj } from '@storybook/vue3'

import ImageWithFallback from './ImageWithFallback.vue'

export default {
  component: ImageWithFallback,
  title: 'Components/Image/ImageWithFallback',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof ImageWithFallback>

export const Primary: Story = {
  args: {
    src: 'ogp.webp'
  }
}

export const Tall: Story = {
  args: {
    src: 'sample.webp'
  }
}

export const Huge: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1556983703-27576e5afa24?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb'
  }
}

export const NotFound: Story = {
  args: {
    src: 'asdf'
  }
}
