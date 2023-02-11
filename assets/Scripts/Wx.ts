export const _wx: typeof wx = new Proxy({} as typeof wx, {
  get(_, key: string) {
    return window.wx?.[key] || (() => console.warn(`wx.${key} is called`))
  }
})

