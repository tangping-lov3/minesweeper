import { Prefab, resources } from 'cc'
import mitt from 'mitt'

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
