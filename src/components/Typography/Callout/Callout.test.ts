import { type VueWrapper, mount } from '@vue/test-utils'
import { expect, it, describe, beforeEach } from 'vitest'
import Callout from './Callout.vue'
import { h } from 'vue'

describe('Callout Component', async () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(Callout, {
      props: {
        color: 'amber',
        title: 'MyTitle',
        margin: '1rem'
      }
    })
  })

  it('should contain title', () => {
    expect(wrapper.text()).toContain('MyTitle')
  })

  it('should contain margin parameter', () => {
    const container = wrapper.find('.container')
    expect(container.attributes('style')).toContain('margin-bottom: 1rem')
  })
})

describe('Callout Component', () => {
  it('renders content in default slot', () => {
    const slotContent = 'This is slot content'
    const wrapper = mount(Callout, {
      slots: {
        default: slotContent
      }
    })
    expect(wrapper.html()).toContain(slotContent)
  })

  it('renders content in named slot', () => {
    const slotContent = 'This is named slot content'
    const wrapper = mount(Callout, {
      slots: {
        default: h('div', slotContent)
      }
    })
    expect(wrapper.html()).toContain(slotContent)
  })
})
