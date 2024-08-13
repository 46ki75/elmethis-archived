import { App, createVNode, render } from 'vue'
import Toast from '../hooks/toast/Toast.vue'

export const ElmethisPlugin = {
  install(_app: App) {
    const toastVNode = createVNode(Toast)
    const container = document.createElement('div')
    document.body.appendChild(container)
    render(toastVNode, container)
  }
}
