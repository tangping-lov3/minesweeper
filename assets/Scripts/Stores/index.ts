import { ref } from '../Utils'

const thunder = () => {
  const flagCount = ref(0)
  const totalCount = ref(0)
  const digedCount = ref(0)
  const thunderCount = ref(0)

  const reset = () => {
    flagCount.value = 0
    totalCount.value = 0
    digedCount.value = 0
    thunderCount.value = 0
  }

  return () => {
    return {
      flagCount,
      totalCount,
      digedCount,
      thunderCount,
      reset
    }
  }
}

export const useThunder = thunder()

