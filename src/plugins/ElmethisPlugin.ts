import { App, createVNode, render } from 'vue'
import Toast from '../components/Global/Toast/Toast.vue'

export const ElmethisPlugin = {
  install(app: App) {
    const toastVNode = createVNode(Toast)
    const container = document.createElement('div')
    document.body.appendChild(container)
    render(toastVNode, container)
  }
}
