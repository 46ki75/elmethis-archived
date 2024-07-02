import type { Preview } from '@storybook/vue3'
import '../src/style.scss'

import { setup } from '@storybook/vue3'
import { ElmethisPlugin } from '../src/plugins/ElmethisPlugin'

setup((app) => {
  app.use(ElmethisPlugin)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        title: 'Table of Contents',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false
        }
      }
    }
  }
}

export default preview
