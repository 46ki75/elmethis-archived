import { Meta, StoryObj } from '@storybook/vue3'

import Checkbox from './elm-checkbox.vue'

export default {
  component: Checkbox,
  title: 'Components/Form/elm-checkbox',
  // tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  args: { label: 'Checkbox' }
}

// export const Primary: Story = {
//   args: {
//     label: 'Checkbox'
//   }
// }

// export const Tiny: Story = {
//   args: {
//     size: 16
//   }
// }

// export const Small: Story = {
//   args: {
//     size: 32
//   }
// }

// export const Large: Story = {
//   args: {
//     size: 128
//   }
// }
