import type { EventTouch } from 'cc'
import { Button, Color, Component, Input, Label, Sprite, UITransform, Widget, _decorator } from 'cc'
import { createEventHandler, emitter, flat, longpress, reactivity, ref } from './Utils'
import { Circle } from './CIrcle'
import { useThunder } from './Stores'

const { ccclass, property } = _decorator

@ccclass('Block')
export class Block extends Component {
  timer = 0
  thunderCount = 0
  colors = ['#b3d665', '#77A21A']
  status = ref<'normal' | 'thunder' | 'flag' | 'diged' >('normal')
  isThunder = false
  originBlocks: Block[][] = []
  position: [number, number] = [0, 0]
  thunderColors = ['#DE4EEB', '#4EEBEB', '#4E67EB', '#EBDE4E', '#EB4E4E']
  aroundBlockPos: [number, number][] = []
  colorIndex = 0
  thunderTextColors = ['#085A0E', '#2860F1', '#E5F341', '#F3D741', '#F16928', '#E90B0B', '#C50BE9', '#FF034A']

  thunderStore = useThunder()

  @property({ type: UITransform })
  UI: UITransform = null

  @property({ type: Sprite })
  Sprite: Sprite = null

  @property({ type: Button })
  Circle: Button

  @property({ type: Label })
  Text: Label

  bindReactive() {
    reactivity(this.status, nv => {
      if (nv === 'diged')
        this.Sprite.color = new Color().fromHEX(this.colorIndex === 0 ? '#d1b89e' : '#dfc3a3')
    })
  }

  reset() {
    this.status.value = 'normal'
    this.Sprite.color = new Color().fromHEX(this.colors[this.colorIndex])
    this.Text.string = ''
    this.Circle.node.active = false
    clearTimeout(this.timer)
  }

  start() {
    this.node.on(Input.EventType.TOUCH_START, (e: EventTouch) => {
      emitter.emit(Input.EventType.TOUCH_START, e)
    })
    const button = this.node.getComponent(Button)
    button.clickEvents.push(createEventHandler({ target: this.node, component: 'Block', handler: 'onClick' }))
    longpress(this.node, () => this.mark(), 500)
    this.bindReactive()
  }

  init() {
    // this.node.setSiblingIndex(0)
    this.UI = this.getComponent(UITransform)
    this.Sprite = this.getComponent(Sprite)
    this.reset()
  }

  updateInfo([width, height]: [number, number], colorIndex: number) {
    this.UI.setContentSize(width, height)
    // this.updateCircleSize(width)
    this.colorIndex = colorIndex
    this.Sprite.color = new Color().fromHEX(this.colors[colorIndex])
  }

  updateCircleSize(size: number) {
    const ui = this.Circle.node.getComponent(Widget)
    ui.left = size * 0.27
    ui.right = size * 0.27
    ui.top = size * 0.27
    ui.bottom = size * 0.27
  }

  onClick() {
    if (this.thunderStore.end.value) return
    this.dig()
  }

  dig(force = true) {
    emitter.emit('start')
    if (this.status.value !== 'normal') return
    if (this.isThunder && force) {
      this.digThunder()
      flat(this.originBlocks).forEach(block => block.digThunder())
      emitter.emit('gameover')
      this.thunderStore.end.value = true
      return
    }
    this.computeAroundThunderCount()
    this.status.value = 'diged'

    // this.Sprite.color = new Color().fromHEX('#FFFFFF')

    if (this.thunderCount === 0)
      { this.digAround() }
     else
      {
        this.Text.string = this.thunderCount.toString()
        this.Text.color = new Color().fromHEX(this.thunderTextColors[this.thunderCount - 1])
      }

    this.thunderStore.digedCount.value++

    if (this.isWin())
      emitter.emit('win')
  }

  isWin() {
    return (this.thunderStore.digedCount.value === this.thunderStore.totalCount.value - this.thunderStore.thunderCount.value)
  }

  digThunder() {
    if (this.isThunder && this.status.value === 'normal') {
      this.status.value = 'thunder'
      this.showCircle()
      this.Sprite.color = new Color().fromHEX(this.thunderColors[Math.floor(Math.random() * this.thunderColors.length)])
    }
  }

  showCircle() {
    const circle = this.Circle.getComponent(Circle)
    circle.show()
  }

  digAround() {
    for (const [x, y] of this.aroundBlockPos) {
      const block = this.originBlocks[x]?.[y]
      if (block && block.status.value === 'normal')
        block.dig(false)
    }
  }

  mark() {
    if (this.thunderStore.end.value) return
    if (this.status.value !== 'flag' && this.status.value !== 'normal') return
    this.status.value = this.status.value === 'flag' ? 'normal' : 'flag'
    if (this.status.value === 'flag') {
      this.Text.string = '🚩'
      this.thunderStore.flagCount.value++
    } else {
      this.Text.string = ''
      this.thunderStore.flagCount.value--
    }
  }

  computeAroundThunderCount() {
    const [x, y] = this.position
    this.aroundBlockPos = [
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1]
    ]

    for (const [x, y] of this.aroundBlockPos) {
      const block = this.originBlocks[x]?.[y]
      if (block && this.originBlocks[x][y].isThunder) this.thunderCount++
    }
  }
}

