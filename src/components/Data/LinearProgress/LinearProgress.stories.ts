import type { Meta, StoryObj } from '@storybook/vue3'

import LinerProgress from './LinearProgress.vue'

const meta: Meta<typeof LinerProgress> = {
  component: LinerProgress,
  title: 'Data/LinerProgress',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof LinerProgress>

export const DisplayPercent: Story = {
  args: { progress: 50, displayPercent: true, color: 'darkblue' }
}

export const NotDisplayPercent: Story = {
  args: { progress: 80 }
}

export const Bold: Story = {
  args: { progress: 80, weight: 16 }
}

export const Loading: Story = {
  args: { progress: 80, isLoading: true }
}
