/* eslint-disable-next-line @typescript-eslint/consistent-type-imports */
import { Button, Canvas, EditBox, Label, Layout, Node, PageView, ProgressBar, RichText, ScrollView, Slider, Sprite, Toggle, UITransform, VideoPlayer, WebView, Widget } from 'cc'
import type { Ref, WatchOptions } from './packages/vue.mjs.js' // /dist/vue.esm-browser
import { watch } from './packages/vue.min.mjs'

export function reactivity<T>(ref: Ref<T>, callback: Fn<T>, options?: WatchOptions): void
export function reactivity<T, C extends Component>(ref: Ref<T>, target: ReactiveTarget<C>, options?: WatchOptions): void
export function reactivity<T, C extends Component>(ref: Ref<T>, target: ReactiveTarget<C> | ((val: T) => void), options?: WatchOptions) {
  watch(() => ref.value, val => {
    if (typeof target === 'function')
      {
        target(val)
      }
    else
      {
        if (target.component)
          target.target = target.node.getComponent<C>(target.component)

        target.target[target.key] = val
      }
  }, { immediate: true, ...options })
}

interface ReactiveTarget<C extends Component> {
  target?: Component
  key: string | symbol
  component?: { new (): C }
  node?: Node
}

type Fn<T> = (val: T) => void

type Component = Label | UITransform | Layout | Sprite | Button | Canvas | EditBox | PageView | ProgressBar | RichText | ScrollView | Slider | Toggle | VideoPlayer | WebView | Widget

export * from './packages/vue.min.mjs'
