import { VueWrapper, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import KaTex from './elm-katex.vue'

describe('KaTex Component', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(KaTex, {
      props: {
        expression: 'W_q = \\frac{\\lambda}{\\mu (\\mu - \\lambda)}'
      }
    })
  })

  it('should contain content', () => {
    expect(wrapper.text()).toContain('λ')
    expect(wrapper.text()).toContain('μ')
  })
})
