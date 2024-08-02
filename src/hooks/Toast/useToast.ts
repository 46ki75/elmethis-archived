import { addToast, closeToast } from './toastManager'
export type { AddToastInput } from './toastManager'

export const useToast = () => {
  return {
    addToast,
    closeToast
  }
}
