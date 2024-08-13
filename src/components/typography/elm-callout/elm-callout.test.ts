import { type VueWrapper, mount } from '@vue/test-utils'
import { expect, it, describe, beforeEach } from 'vitest'
import Callout from './elm-callout.vue'

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
