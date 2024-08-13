import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, beforeEach, it, expect } from 'vitest'
import Heading2 from './elm-heading-2.vue'

describe('Heading2 Component', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(Heading2, {
      props: {
        content: 'MyHeading2',
        size: '2rem',
        margin: '1rem'
      }
    })
  })

  it('sholud contain content', () => {
    expect(wrapper.text()).toContain('MyHeading2')
  })

  it('should contain font-size', () => {
    expect(wrapper.find('.text').attributes('style')).toContain(
      'font-size: 2rem'
    )
  })
})
