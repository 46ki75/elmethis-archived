import type { Meta, StoryObj } from '@storybook/vue3'

import Tooltip from './elm-tooltip.vue'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/Containment/elm-tooltip',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Tooltip>

const Template = (args: any) => ({
  components: { Tooltip },
  setup() {
    return { args }
  },
  template: `
    <div style="display: flex; gap: 1rem; flex-wrap: wrap">
      <Tooltip>
        <template #default>
          <div>Tooltip, Here!</div>
        </template>

        <template #target>
          <div style="font-size: 2rem">Hover here</div>
        </template>
      </Tooltip>
    </div>
  `
})

export const Primary: Story = { render: Template, args: {} }
