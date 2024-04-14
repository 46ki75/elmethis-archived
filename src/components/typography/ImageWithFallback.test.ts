import { VueWrapper, shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import ImageWithFallback from './ImageWithFallback.vue'

describe('ImageWithDallback Component', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = shallowMount(ImageWithFallback, {
      props: {
        src: 'https://www.example.com',
        alt: 'OGP Image',
        height: 1200,
        width: 630,
        margin: '1rem'
      }
    })
  })

  it('should contain aspect-ratio', () => {
    expect(wrapper.find('.loading>div').attributes('style')).toContain('aspect')
  })
})
