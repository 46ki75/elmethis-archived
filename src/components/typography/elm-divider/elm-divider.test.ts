import { type VueWrapper, mount } from '@vue/test-utils'
import { expect, it, describe, beforeEach } from 'vitest'
import Divider from './elm-divider.vue'

describe('Divider Component', async () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(Divider, {
      props: {
        text: 'MyText',
        margin: '1rem'
      }
    })
  })

  it('sould contain text', () => {
    expect(wrapper.text()).toContain('MyText')
  })

  it('should contain margin style', () => {
    expect(wrapper.find('.wrapper').attributes('style')).toContain(
      `margin-bottom: 1rem`
    )
  })
})
