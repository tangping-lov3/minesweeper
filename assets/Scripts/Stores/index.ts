import { emitter } from '../Utils'

class Ref<T> {
  _value: T
  _EMIT_KEY: string

  get emitKey() {
    return this._EMIT_KEY
  }

  constructor(value: T, emitKey: string) {
    this._value = value
    this._EMIT_KEY = emitKey
  }

  get value() {
    return this._value
  }

  set value(value: T) {
    this._value = value
    emitter.emit(this._EMIT_KEY, value)
  }
}

function ref<T>(value: T, emitKey: string) {
  return new Ref(value, emitKey)
}

const thunder = () => {
  const flagCount = ref(0, 'flagCount')
  const totalCount = ref(0, 'totalCount')
  const digedCount = ref(0, 'digedCount')
  const thunderCount = ref(0, 'thunderCount')
  const end = ref(false, 'end')

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
