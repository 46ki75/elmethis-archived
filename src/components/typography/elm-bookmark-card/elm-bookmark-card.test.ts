import { type VueWrapper, mount } from '@vue/test-utils'
import { expect, it, describe, beforeEach } from 'vitest'
import BookmarkCard from './elm-bookmark-card.vue'

describe('mount component', async () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(BookmarkCard, {
      props: {
        title: 'MyTitle',
        description: 'MyDescription',
        url: 'https://example.com',
        image: 'https://example.com/image.webp',
        margin: '1rem'
      }
    })
  })

  it('should contain the title', () => {
    expect(wrapper.text()).toContain('MyTitle')
  })

  it('should contain the description', () => {
    expect(wrapper.text()).toContain('MyDescription')
  })

  it('should contain the URL as text', () => {
    expect(wrapper.text()).toContain('https://example.com')
  })

  it('should contain the URL as <a /> tag attribute', () => {
    expect(wrapper.find('a').attributes('href')).toBe('https://example.com')
  })

  it('should contain the Image url', () => {
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://example.com/image.webp'
    )
  })

  it('shoult contain margin parameter', () => {
    expect(wrapper.find('nav').attributes('style')).toContain(
      'margin-bottom: 1rem;'
    )
  })

  it('should open the link in a new tab', () => {
    const link = wrapper.find('a')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toContain('noreferrer')
    expect(link.attributes('rel')).toContain('noopener')
    expect(link.attributes('href')).toBe('https://example.com')
  })
})
