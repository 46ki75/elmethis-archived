import { VueWrapper, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import Heading3 from './elm-heading-3.vue'

describe('Heading3 Component', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(Heading3, {
      props: {
        content: 'MyContent',
        size: '2rem',
        margin: '1rem'
      }
    })
  })

  it('should contain content', () => {
    expect(wrapper.text()).toContain('MyContent')
  })

  it('should contain size', () => {
    expect(wrapper.find('.heading').attributes('style')).toContain(
      'font-size: 2rem'
    )
  })
})
