import { addToast, closeToast } from './toastManager'

export const useToast = () => {
  return {
    addToast,
    closeToast
  }
}
