import type { Ref, WatchOptions } from '../../packages/vue.mjs.js' // /dist/vue.esm-browser
import { watch } from '../../packages/vue.mjs'

export function reactivity<T>(ref: Ref<T>, callback: Fn<T>, options?: WatchOptions): void
export function reactivity<T>(ref: Ref<T>, { target, key }: ReactiveTarget, options?: WatchOptions): void
export function reactivity<T>(ref: Ref<T>, target: ReactiveTarget | ((val: T) => void), options?: WatchOptions) {
  watch(() => ref.value, val => {
    if (typeof target === 'function')
      target(val)
    else
      target.target[target.key] = val
  }, { immediate: true, ...options })
}

interface ReactiveTarget {
  target: object
  key: string | symbol
}

type Fn<T> = (val: T) => void

export * from '../../packages/vue.mjs'
