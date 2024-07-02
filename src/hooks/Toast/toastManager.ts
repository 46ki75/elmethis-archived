import { ref } from 'vue'

export const toasts = ref<string[]>([])

export const addToast = (message: string) => {
  toasts.value.push(message)

  setTimeout(() => {
    toasts.value.shift()
  }, 3000)
}
