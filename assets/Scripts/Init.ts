import type { Node } from 'cc'
import { Button, Component, Label, Layout, UITransform, _decorator, instantiate, view } from 'cc'
import { emitter, loadPrefab, reactivity, ref } from './Utils'
import { Block } from './Block'
import type { Info } from './Result/Result'
import { Result } from './Result/Result'
import { useThunder } from './Stores'
import { Select } from './Select/Select'
import { TopBar } from './TopBar'

const Sizes = {
  低难度: 12,
  中难度: 18,
  高难度: 24
}

const Thunders = {
  低难度: 2,
  中难度: 40,
  高难度: 99
}

const { ccclass, property } = _decorator

@ccclass('Init')
export class Init extends Component {
  blockSize = 0
  windowSize: Record<'width' | 'height', number> = { width: 0, height: 0 }
  startX = 0
  startY = 0
  TopBar: UITransform = null
  thunders: boolean[] = []
  level = '低难度'
  blocks: Node[][] = []
  startTime = ref(0)
  thunderStore = useThunder()

  @property({ type: Button })
  Restart: Button

  @property({ type: Layout })
  Result: Layout

  @property({ type: Layout })
  TopBarNode: Layout

  startTimer = 0

  startGame() {
    if (this.startTimer) return
    this.startTimer = setInterval(() => {
      this.startTime.value++
    }, 1000)
  }

  bindReactive() {
    const flagLabel = this.TopBarNode.node.getChildByPath('Background/Flag').getChildByName('Label').getComponent(Label)
    const timeLabel = this.TopBarNode.node.getChildByPath('Background/Time').getChildByName('Label').getComponent(Label)
    reactivity(this.thunderStore.flagCount, { target: flagLabel, key: 'string' })
    reactivity(this.startTime, { target: timeLabel, key: 'string' })
    reactivity(this.TopBarNode.getComponent(TopBar).Select.getComponent(Select).currentOption, (val: keyof typeof Sizes) => {
      this.level = val
      this._update()
    })
  }

  start() {
    this.bindReactive()
    emitter.on('win', () => this.win())
    console.log(this.thunderStore)

    emitter.on('gameover', () => this.gameover())
    emitter.on('start', () => this.startGame())
    this.Result.node.active = false
    this.Restart.node.on('click', () => {
      this.restart()
    }, this)

    this.windowSize = view.getVisibleSize()
    this.startX = -(this.windowSize.width / 2)
    this.TopBar = this.node.getChildByName('TopBar').getComponent(UITransform)
    this.startY = -this.TopBar.height
    this._update()
  }

  initThunders() {
    const totalBlock = Sizes[this.level] ** 2
    const totalThunder = Thunders[this.level]
    this.thunderStore.thunderCount.value = totalThunder
    this.thunders = new Array(totalBlock - totalThunder).fill(false).concat(new Array(totalThunder).fill(true)).sort(() => Math.random() - 0.5)
    this.thunderStore.thunderCount.value = totalThunder
    this.thunderStore.totalCount.value = totalBlock
  }

  async insertBlock() {
    const prefab = await loadPrefab('prefab/Block')
    let startColorIndex = 1
    let colorIndex = 0

    const blocks: Block[][] = []
    this.blocks = []
    for (let i = 0; i < Sizes[this.level]; i++) {
      startColorIndex = (startColorIndex + 1) % 2
      colorIndex = (startColorIndex + 1) % 2
      blocks[i] = []
      this.blocks[i] = []
      for (let j = 0; j < Sizes[this.level]; j++) {
        colorIndex = (colorIndex + 1) % 2
        const block = instantiate(prefab)
        const blockScript = block.getComponent(Block)
        blocks[i][j] = blockScript
        this.blocks[i][j] = block
        blockScript.init()
        blockScript.updateInfo([this.blockSize, this.blockSize], colorIndex)
        blockScript.position = [i, j]
        blockScript.originBlocks = blocks
        blockScript.isThunder = this.thunders.pop()
        block.setPosition(i * this.blockSize + this.startX, -((j + 1) * this.blockSize) + this.startY)
        this.node.addChild(block)
      }
    }
  }

  _update() {
    this.blockSize = this.windowSize.width / Sizes[this.level]
    this.removeBlockNode()
    this.thunderStore.reset()
    this.initThunders()
    this.insertBlock()
  }

  removeBlockNode() {
    for (let i = 0; i < this.node.children.length; i++) {
      const child = this.node.children[i]
      if (child.name === 'Block')
        child.destroy()
    }
  }

  restart() {
    this._update()
  }

  showResult(info: Info) {
    this.Result.node.active = true
    const result = this.Result.getComponent(Result)
    result.updateInfo(info)
    this.startTime.value = 0
  }

  win() {
    clearInterval(this.startTimer)
    this.startTimer = 0
    const now = Date.now()
    const time = now - this.startTime.value
    const info = {
      time: `${(time / 1000).toFixed(2)}S`,
      rank: 1
    }
    this.showResult(info)
  }

  gameover() {
    clearInterval(this.startTimer)
    this.startTimer = 0
    const info = {
      time: '___',
      rank: '___'
    } as Info
    this.showResult(info)
  }
}

