import { VueWrapper, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import TurnText from './elm-turn-text.vue'

describe('mount component', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(TurnText, {
      props: {
        text: 'MyText'
      }
    })
  })

  it('should contain text', () => {
    expect(wrapper.text()).toBe('MyText')
  })
})
