import { mount, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import Linktext from './elm-link-text.vue'

describe('Linktext component', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(Linktext, {
      props: {
        href: 'example.com',
        text: 'Click to jump'
      }
    })
  })

  it('should contain text', () => {
    expect(wrapper.text()).toBe('Click to jump')
  })

  it('sould contain link', () => {
    expect(wrapper.attributes('href')).toBe('example.com')
  })
})
