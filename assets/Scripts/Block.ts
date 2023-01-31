import { Button, Color, Component, Label, Sprite, UITransform, Widget, _decorator } from 'cc'
import { emitter, flat, longpress } from './Utils'
import { Circle } from './CIrcle'
import { useThunder } from './Stores'

const { ccclass, property } = _decorator

@ccclass('Block')
export class Block extends Component {
  lastClickTime = 0
  timer = 0
  thunderCount = 0
  colors = ['#b3d665', '#77A21A']
  status: 'normal' | 'thunder' | 'flag' | 'diged' = 'normal'
  isThunder = false
  originBlocks: Block[][] = []
  position: [number, number] = [0, 0]
  thunderColors = ['#DE4EEB', '#4EEBEB', '#4E67EB', '#EBDE4E', '#EB4E4E']
  aroundBlockPos: [number, number][] = []
  colorIndex = 0

  thunderStore = useThunder()

  @property({ type: UITransform })
  UI: UITransform = null

  @property({ type: Sprite })
  Sprite: Sprite = null

  @property({ type: Button })
  Circle: Button

  @property({ type: Label })
  Text: Label

  reset() {
    this.status = 'normal'
    this.Sprite.color = new Color().fromHEX(this.colors[this.colorIndex])
    this.Text.string = ''
    this.Circle.node.active = false
    this.lastClickTime = 0
    clearTimeout(this.timer)
  }

  start() {
    this.node.on('click', this.onClick, this)
    longpress(this.node, () => this.mark())
    this.node.setSiblingIndex(1)
    console.log(this.node)
  }

  init() {
    this.UI = this.getComponent(UITransform)
    this.Sprite = this.getComponent(Sprite)
  }

  updateInfo([width, height]: [number, number], colorIndex: number) {
    this.UI.setContentSize(width, height)
    this.updateCircleSize(width)
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
    // const now = Date.now()

    // if (now - this.lastClickTime < 300) {
    //   this.mark()
    //   this.lastClickTime = 0
    //   clearTimeout(this.timer)
    //   return
    // }

    // this.lastClickTime = now
    // clearTimeout(this.timer)

    // this.timer = setTimeout(() => {
    //   this.dig()
    // }, 500)
    this.dig()
  }

  dig(force = true) {
    emitter.emit('start')
    if (this.status !== 'normal') return
    if (this.isThunder && force) {
      this.digThunder()
      flat(this.originBlocks).forEach(block => block.digThunder())
      emitter.emit('gameover')
      return
    }
    this.computeAroundThunderCount()
    this.status = 'diged'
    this.Sprite.color = new Color().fromHEX('#FFFFFF')

    if (this.thunderCount === 0)
      this.digAround()
     else
      this.Text.string = this.thunderCount.toString()

    this.thunderStore.digedCount.value++

    if (this.thunderStore.thunderCount.value === this.thunderStore.flagCount.value && this.thunderStore.digedCount.value + this.thunderStore.flagCount.value === this.thunderStore.totalCount.value)
      emitter.emit('win')
  }

  digThunder() {
    if (this.isThunder && this.status === 'normal') {
      this.status = 'thunder'
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
      if (block && block.status === 'normal')
        block.dig(false)
    }
  }

  mark() {
    if (this.status !== 'flag' && this.status !== 'normal') return
    this.status = this.status === 'flag' ? 'normal' : 'flag'
    if (this.status === 'flag') {
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

