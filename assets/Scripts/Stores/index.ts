const thunder = () => {
  const state = {
    flagCount: 0,
    totalCount: 0,
    digedCount: 0,
    thunderCount: 0
  }

  const reset = () => {
    state.flagCount = 0
    state.totalCount = 0
    state.digedCount = 0
    state.thunderCount = 0
  }

  return () => {
    return {
      state,
      reset
    }
  }
}

export const useThunder = thunder()
