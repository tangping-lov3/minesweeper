import { ref } from '../Utils'

const thunder = () => {
  const flagCount = ref(0)
  const totalCount = ref(0)
  const digedCount = ref(0)
  const thunderCount = ref(0)
  const end = ref(false)

  const reset = () => {
    flagCount.value = 0
    totalCount.value = 0
    digedCount.value = 0
    thunderCount.value = 0
    end.value = false
  }

  return () => {
    return {
      flagCount,
      totalCount,
      digedCount,
      thunderCount,
      end,
      reset
    }
  }
}

export const useThunder = thunder()

