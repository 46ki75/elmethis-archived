import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import Pagetop from './elm-pagetop.vue'

describe('Pagetop Component', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(Pagetop)
  })

  it('should contain flavor text', () => {
    expect(wrapper.text()).toContain('Back to Top')
  })
})
