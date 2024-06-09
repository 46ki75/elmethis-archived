import { type VueWrapper, mount } from '@vue/test-utils'
import { expect, it, describe, beforeEach } from 'vitest'
import ErrorCard from './ErrorCard.vue'

describe('ErrorCard', async () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(ErrorCard, {
      props: {}
    })
  })

  it('sould contain headline', () => {
    expect(wrapper.text()).toContain('Whoops, 404')
  })

  it('sould contain title', () => {
    expect(wrapper.text()).toContain('Page not found')
  })

  it('sould contain text', () => {
    expect(wrapper.text()).toContain(
      'The page you were looking for does not exist'
    )
  })
})
