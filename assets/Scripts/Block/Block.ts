import type { EventTouch } from 'cc'
import { Button, Color, Component, Input, Label, Sprite, UITransform, Widget, _decorator } from 'cc'
import { createEventHandler, emitter, flat, longpress } from '../Utils'
import { Circle } from '../CIrcle/CIrcle'
import { useThunder } from '../Stores'

const { ccclass, property } = _decorator

@ccclass('Block')
export class Block extends Component {
  __timer = 0
  __thunderCount = 0
  __colors = ['#b3d665', '#77A21A']
  __status: 'normal' | 'thunder' | 'flag' | 'diged' = 'normal'
  __isThunder = false
  __originBlocks: Block[][] = []
  __position: [number, number] = [0, 0]
  __thunderColors = ['#DE4EEB', '#4EEBEB', '#4E67EB', '#EBDE4E', '#EB4E4E']
  __aroundBlockPos: [number, number][] = []
  __colorIndex = 0
  __thunderTextColors = ['#085A0E', '#2860F1', '#E5F341', '#F3D741', '#F16928', '#E90B0B', '#C50BE9', '#FF034A']

  __thunderStore = useThunder()

  @property({ type: UITransform })
  UI: UITransform = null

  @property({ type: Sprite })
  Sprite: Sprite = null

  @property({ type: Button })
  Circle: Button

  @property({ type: Label })
  Text: Label

  __clickLock = { value: false }
  __debug = false

  __reset() {
    this.__status = 'normal'
    this.Sprite.color = new Color().fromHEX(this.__colors[this.__colorIndex])
    this.Text.string = ''
    this.Circle.node.active = false
    clearTimeout(this.__timer)
    this.__thunderCount = 0
  }

  start() {
    this.node.on(Input.EventType.TOUCH_START, (e: EventTouch) => {
      emitter.emit(Input.EventType.TOUCH_START, e)
    })
    const button = this.node.getComponent(Button)
    button.clickEvents.push(createEventHandler({ target: this.node, component: 'Block', handler: 'onClick' }))
    this.__clickLock = longpress(this.node, () => this.__mark(), 500)

    if (this.__debug) {
      this.__computeAroundThunderCount()
      this.Text.string = this.__thunderCount.toString()
      if (this.__isThunder)
        this.__digThunder()
    }
  }

  __init() {
    // this.node.setSiblingIndex(0)
    this.UI = this.getComponent(UITransform)
    this.Sprite = this.getComponent(Sprite)
    this.__reset()
  }

  __updateInfo([width, height]: [number, number], colorIndex: number) {
    this.UI.setContentSize(width, height)
    this.Text.getComponent(UITransform).setContentSize(width, height)
    // this.updateCircleSize(width)
    this.__colorIndex = colorIndex
    this.Sprite.color = new Color().fromHEX(this.__colors[colorIndex])
  }

  __updateCircleSize(size: number) {
    const ui = this.Circle.node.getComponent(Widget)
    ui.left = size * 0.27
    ui.right = size * 0.27
    ui.top = size * 0.27
    ui.bottom = size * 0.27
  }

  onClick() {
    if (this.__thunderStore.end.value || this.__clickLock.value) return
    this.__dig()
  }

  __dig(force = true) {
    emitter.emit('start')
    if (this.__status !== 'normal') return
    if (this.__isThunder && force) {
      this.__digThunder()
      flat(this.__originBlocks).forEach(block => block.__digThunder())
      emitter.emit('gameover')
      this.__thunderStore.end.value = true
      return
    }
    this.__computeAroundThunderCount()
    this.__status = 'diged'
    this.Sprite.color = new Color().fromHEX(this.__colorIndex === 0 ? '#d1b89e' : '#dfc3a3')
    this.Sprite.color = new Color().fromHEX('#FFFFFF')

    if (this.__thunderCount === 0)
      { this.__digAround() }
     else
      {
        this.Text.string = this.__thunderCount.toString()
        this.Text.color = new Color().fromHEX(this.__thunderTextColors[this.__thunderCount - 1])
      }

    this.__thunderStore.digedCount.value++

    if (this.__isWin())
      emitter.emit('win')
  }

  __isWin() {
    return (this.__thunderStore.digedCount.value === this.__thunderStore.totalCount.value - this.__thunderStore.thunderCount.value)
  }

  __digThunder() {
    if (this.__isThunder && (this.__status === 'normal' || this.__status === 'flag')) {
      this.__status = 'thunder'
      this.__showCircle()
      this.Text.string = ''
      this.Sprite.color = new Color().fromHEX(this.__thunderColors[Math.floor(Math.random() * this.__thunderColors.length)])
    }
  }

  __showCircle() {
    const circle = this.Circle.getComponent(Circle)
    circle.show()
  }

  __digAround() {
    for (const [x, y] of this.__aroundBlockPos) {
      const block = this.__originBlocks[x]?.[y]
      if (block && block.__status === 'normal')
        block.__dig(false)
    }
  }

  __mark() {
    if (this.__thunderStore.end.value) return
    if (this.__status !== 'flag' && this.__status !== 'normal') return
    this.__status = this.__status === 'flag' ? 'normal' : 'flag'
    if (this.__status === 'flag') {
      this.Text.string = '🚩'
      this.__thunderStore.flagCount.value++
    } else {
      this.Text.string = ''
      this.__thunderStore.flagCount.value--
    }
  }

  __computeAroundThunderCount() {
    const [x, y] = this.__position
    this.__aroundBlockPos = [
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1]
    ]

    for (const [x, y] of this.__aroundBlockPos) {
      const block = this.__originBlocks[x]?.[y]
      if (block && this.__originBlocks[x][y].__isThunder) this.__thunderCount++
    }
  }
}

