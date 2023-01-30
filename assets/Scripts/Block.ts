import { Button, Color, Component, Input, Label, Sprite, UITransform, _decorator } from 'cc'
import { emitter, flat } from './Utils'
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
  thunderColors = ['#FF0000AA', '#FF7F00AA', '#FFFF00AA', '#00FF00AA', '#0000FFAA', '#4B0082AA', '#8B00FFAA']
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
    this.node.on(Input.EventType.TOUCH_END, this.onClick, this)
  }

  init() {
    this.UI = this.getComponent(UITransform)
    this.Sprite = this.getComponent(Sprite)
  }

  updateInfo([width, height]: [number, number], colorIndex: number) {
    this.UI.setContentSize(width, height)
    this.colorIndex = colorIndex
    this.Sprite.color = new Color().fromHEX(this.colors[colorIndex])
  }

  onClick() {
    const now = Date.now()

    if (now - this.lastClickTime < 300) {
      this.mark()
      this.lastClickTime = 0
      clearTimeout(this.timer)
      return
    }

    this.lastClickTime = now
    clearTimeout(this.timer)

    this.timer = setTimeout(() => {
      this.dig()
    }, 300)
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

    this.thunderStore.state.digedCount++

    if (this.thunderStore.state.thunderCount === this.thunderStore.state.flagCount && this.thunderStore.state.digedCount + this.thunderStore.state.flagCount === this.thunderStore.state.totalCount)
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
      this.thunderStore.state.flagCount++
    } else {
      this.Text.string = ''
      this.thunderStore.state.flagCount--
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

