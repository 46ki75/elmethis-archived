import type { Meta, StoryObj } from '@storybook/vue3'

import JSONComponent from './elm-json-component.vue'
import { seed } from './seed'

const meta: Meta<typeof JSONComponent> = {
  component: JSONComponent,
  title: 'Components/JSONComponent/elm-json-component',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof JSONComponent>

export const Bold: Story = {
  args: {
    components: seed
  }
}
