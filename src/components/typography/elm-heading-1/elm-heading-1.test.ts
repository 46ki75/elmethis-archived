import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import Heading1 from './elm-heading-1.vue'

describe('Heading1 Component', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(Heading1, {
      props: {
        content: 'Heading1',
        size: '2rem',
        margin: '1rem'
      }
    })
  })

  it('should contain content', () => {
    expect(wrapper.text()).toContain('Heading1')
  })

  it('should contain size', () => {
    expect(wrapper.find('h1').attributes('style')).toContain('font-size: 2rem')
  })

  it('should contain margin', () => {
    expect(wrapper.find('h1').attributes('style')).toContain(
      'margin-bottom: 1rem'
    )
  })
})
