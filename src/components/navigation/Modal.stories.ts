import { Meta, StoryObj } from '@storybook/vue3'

import Modal from './Modal.vue'
import { ref } from 'vue'

export default {
  component: Modal,
  title: 'Navigation/Modal',
  argTypes: {}
} as Meta

type Story = StoryObj<typeof Modal>

const Template = (args: any) => ({
  components: { Modal },
  setup() {
    const isVisible = ref(false)
    const toggleModal = () => {
      isVisible.value = !isVisible.value
    }
    return { isVisible, toggleModal, args }
  },
  template: `
    <div>
      <button @click="toggleModal">Toggle Modal</button>
      <Modal title="Awesome modal title" :isVisible="isVisible" @close="toggleModal">
        <div>
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </Modal>
    </div>
  `
})

export const Primary: Story = { render: Template, args: {} }
