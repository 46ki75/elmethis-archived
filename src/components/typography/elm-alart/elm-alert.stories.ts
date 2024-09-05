import { Meta, StoryObj } from '@storybook/vue3'

import ElmAlart from './elm-alert.vue'

export default {
  component: ElmAlart,
  title: 'Components/Typography/elm-alart',
  tags: ['autodocs'],
  argTypes: {}
} as Meta

type Story = StoryObj<typeof ElmAlart>

const Template = (args: any) => ({
  components: { ElmAlart },
  setup() {
    return { args }
  },
  template: `
    <ElmAlart v-bind="args">
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </ElmAlart>
  `
})

export const primary: Story = {
  args: { type: 'note' },
  render: Template
}

export const tip: Story = {
  args: { type: 'tip' },
  render: Template
}

export const important: Story = {
  args: { type: 'important' },
  render: Template
}

export const warning: Story = {
  args: { type: 'warning' },
  render: Template
}

export const caution: Story = {
  args: { type: 'caution' },
  render: Template
}
