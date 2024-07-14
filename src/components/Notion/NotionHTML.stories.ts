import type { Meta, StoryObj } from '@storybook/vue3'

import NotionHTML from './NotionHTML.vue'
import { seed } from './seed'

const meta: Meta<typeof NotionHTML> = {
  component: NotionHTML,
  title: 'Components/Notion/NotionHTML',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof NotionHTML>

export const Light: Story = {
  args: { domjson: seed }
}

export const Dark: Story = {
  args: { domjson: seed, theme: 'dark' }
}
