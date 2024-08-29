import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import CodeBlock from './elm-code-block.vue'

describe('CodeBlock component', async () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(CodeBlock, {
      props: { code: 'const a = ""', caption: 'src/main.ts', language: 'ts' }
    })
  })

  it('should contain code', async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    expect(wrapper.text()).toContain('const a = ""')
  })

  it('should contain caption', () => {
    expect(wrapper.text()).toContain('src/main.ts')
  })

  it('should contain class', async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    expect(wrapper.find('code').classes()).toContain('language-ts')
  })
})
