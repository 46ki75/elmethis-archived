import { ref } from 'vue'
import { v4 } from 'uuid'

interface Toast {
  id: string
  content: string
  duration: number
}

export const toasts = ref<Toast[]>([])

// # --------------------------------------------------------------------------------
//
// addToast
//
// # --------------------------------------------------------------------------------

export interface AddToastInput {
  /**
   * **required!**
   *
   * Text displayed on toast.
   */
  content: string
  /**
   * **optional?** default: 5000
   *
   * Specify the time in milliseconds to display the toast. If not specified,
   * it defaults to 5000 ms. If 0 is specified,
   * the toast will not disappear unless the user explicitly closes it.
   */
  duration?: number
}

/**
 * Display a toast. If no `duration` is specified,
 * the toast will disappear after 5000ms.
 * Setting `duration` to 0 will make the toast not disappear.
 *
 * ```ts
 * import { useToast } from 'elmethis'
 * const { addToast } = useToast()
 *
 * const handleClick = () => {
 *   addToast({ content: 'Hello!', duration: 3000 })
 * }
 * ```
 * @param input AddToastInput
 * @returns Toast Object
 */
export const addToast = (input: AddToastInput) => {
  const id = v4()
  const content = input.content
  const duration = input.duration ?? 5000

  const newToast = { id, content, duration }

  toasts.value.push(newToast)

  setTimeout(() => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }, duration)

  return newToast
}

/**
 * You can close a toast by specifying its ID.
 * The toast ID can be obtained from the toast object
 * as well as the return value of the `addToast()` method.
 *
 * ```ts
 * import { ref } from 'vue'
 * import { useToast } from 'elmethis'
 * const { addToast, closeToast } = useToast()
 *
 * const id = ref('')
 *
 * const handleClick = () => {
 *   const toast = addToast({ content: 'Hello!' })
 *   id.value = toast.id
 * }
 *
 * const handleClose = () => {
 *   closeToast(id.value)
 * }
 * ```
 * @param id Toast ID
 */
export const closeToast = (id: string) => {
  toasts.value = toasts.value.filter((toast) => toast.id !== id)
}
