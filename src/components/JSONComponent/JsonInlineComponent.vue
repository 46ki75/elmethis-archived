<template>
  <component
    v-for="(component, index) in renderComponents(components)"
    :key="index"
    :is="component"
  />
</template>

<script setup lang="ts">
import type { InlineComponent } from 'json-component-spec'
import Linktext from '../Typography/Linktext/Linktext.vue'
import { createTextVNode, h, VNode } from 'vue'

// # --------------------------------------------------------------------------------
//
// props
//
// # --------------------------------------------------------------------------------

withDefaults(
  defineProps<{
    theme: 'light' | 'dark'
    components: InlineComponent[]
    margin: string
  }>(),
  {
    theme: 'light',
    margin: '1.5rem'
  }
)

// # --------------------------------------------------------------------------------
//
// scripts
//
// # --------------------------------------------------------------------------------

function renderComponents(components: InlineComponent[]) {
  const results = []

  for (const component of components) {
    switch (component.component) {
      case 'text': {
        const annotations = component.text.annotations

        if (annotations?.code) {
          results.push(h('code', component.text.content))
        } else {
          let result = createTextVNode(component.text.content)

          if (annotations?.underline) {
            result = h('ins', result)
          }

          if (annotations?.strikethrough) {
            result = h('del', result)
          }

          if (annotations?.italic) {
            result = h('em', result)
          }

          if (annotations?.bold) {
            result = h('strong', result)
          }

          const className: string[] = []

          if (component.text.color?.fg != null) {
            className.push(component.text.color.fg)
          }

          if (component.text.color?.bg != null) {
            className.push(component.text.color.bg + '-bg')
          }

          result = h('span', { class: className }, result)

          results.push(result)
        }

        break
      }

      case 'link_text': {
        const result = h(Linktext, {
          text: component.link_text.content,
          href: component.link_text.href
        })

        results.push(result)

        break
      }

      case 'span': {
        const result: VNode = h(
          'span',
          renderComponents(component.span.children)
        )

        results.push(result)
      }
    }
  }

  return results
}
</script>

<style scoped lang="scss">
// # --------------------------------------------------------------------------------
//
// styles
//
// # --------------------------------------------------------------------------------

strong {
  font-weight: bold;
}

code {
  font-family: 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  padding: 0.125rem 0.25rem;
  background-color: rgba($color: #888888, $alpha: 0.15);
  border-radius: 0.25rem;
}

.gray {
  color: #788191;
}

.gray-bg {
  background-color: rgba($color: #788191, $alpha: 0.2);
}

.brown {
  color: #6e3c3c;
}

.brown-bg {
  background-color: rgba($color: #6e3c3c, $alpha: 0.2);
}

.orange {
  color: #b76e5f;
}

.orange-bg {
  background-color: rgba($color: #b76e5f, $alpha: 0.2);
}

.yellow {
  color: #b0985d;
}

.yellow-bg {
  background-color: rgba($color: #b0985d, $alpha: 0.2);
}

.green {
  color: #4ba96f;
}

.green-bg {
  background-color: rgba($color: #4ba96f, $alpha: 0.2);
}

.blue {
  color: #5879b0;
}

.blue-bg {
  background-color: rgba($color: #5879b0, $alpha: 0.2);
}

.purple {
  color: #8a60b5;
}

.purple-bg {
  background-color: rgba($color: #8a60b5, $alpha: 0.2);
}

.pink {
  color: #c25692;
}

.pink-bg {
  background-color: rgba($color: #c25692, $alpha: 0.2);
}

.red {
  color: #aa5363;
}

.red-bg {
  background-color: rgba($color: #aa5363, $alpha: 0.2);
}
</style>
