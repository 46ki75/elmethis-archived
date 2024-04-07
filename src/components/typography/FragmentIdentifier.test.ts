import { VueWrapper, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import FragmentIdentifier from './FragmentIdentifier.vue'

describe('FragmentIdentifier Component', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(FragmentIdentifier, {
      props: {
        content: 'MyHeading',
        margin: '1rem'
      }
    })
  })

  it('should contain content', () => {
    expect(wrapper.find('a').attributes('href')).toContain('MyHeading')
  })

  it('should contain margin', () => {
    expect(wrapper.find('.container').attributes('style')).toContain(
      'margin-bottom: 1rem;'
    )
  })
})
