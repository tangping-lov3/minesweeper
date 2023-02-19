import type { EventHandler, EventTouch, Node } from 'cc'
import { Component, Input, Prefab, resources } from 'cc'
import mitt from 'mitt'
import { ref } from './vue'

export * from './vue'

export function loadPrefab(path: string): Promise<Prefab> {
  return new Promise((resolve, reject) => {
    resources.load(path, Prefab, (err, asset) => {
      if (err)
        reject(err)
       else
        resolve(asset)
    })
  })
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export function flat<T>(arr: T[][]): T[] {
  return arr.reduce((prev, cur) => prev.concat(cur), [])
}

export const emitter = mitt()

export function longpress(target: Node, callback: (e: EventTouch) => void, time = 1000) {
  let timer: number
  const clickLock = ref(false)
  target.on(Input.EventType.TOUCH_START, (event: EventTouch) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(event)
      clickLock.value = true
    }, time)
  })
  target.on(Input.EventType.TOUCH_END, () => {
    clickLock.value = false
    clearTimeout(timer)
  })
  target.on(Input.EventType.TOUCH_CANCEL, () => {
    clickLock.value = false
    clearTimeout(timer)
  })
  return clickLock
}

export function createEventHandler(option: Partial<EventHandler>) {
  const handler = new Component.EventHandler()
  for (const key in option)
    handler[key] = option[key]
  return handler
}
