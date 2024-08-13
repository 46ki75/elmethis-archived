import type { Meta, StoryObj } from '@storybook/vue3'

import JsonComponent from './JsonComponent.vue'
import { seed } from './seed'

const meta: Meta<typeof JsonComponent> = {
  component: JsonComponent,
  title: 'Components/JSONComponent/JsonComponent',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof JsonComponent>

export const Bold: Story = {
  args: {
    components: seed
  }
}
