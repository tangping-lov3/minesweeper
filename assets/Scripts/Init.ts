import type { Node } from 'cc'
import { Button, Component, Label, Layout, UITransform, _decorator, instantiate, view } from 'cc'
import { emitter, loadPrefab, reactivity, ref } from './Utils'
import { Block } from './Block'
import type { Info } from './Result/Result'
import { Result } from './Result/Result'
import { useThunder } from './Stores'
import { Select } from './Select/Select'
import { TopBar } from './TopBar'
import { _wx } from './Wx'

const Sizes = {
  低难度: 10,
  中难度: 14,
  高难度: 18
}

const Thunders = {
  低难度: 20,
  中难度: 40,
  高难度: 99
}

const { ccclass, property } = _decorator

@ccclass('Init')
export class Init extends Component {
  __blockSize = 0
  __windowSize: Record<'width' | 'height', number> = { width: 0, height: 0 }
  __startX = 0
  __startY = 0
  __TopBar: UITransform = null
  __thunders: boolean[] = []
  __level = '低难度'
  __blocks: Node[][] = []
  __startTime = ref(0)
  __initialBlocks: Node[] = []
  __thunderStore = useThunder()

  @property({ type: Button })
  Restart: Button

  @property({ type: Layout })
  Result: Layout

  @property({ type: Layout })
  TopBarNode: Layout

  __startTimer: any = 0

  async __initBlocks() {
    const prefab = await loadPrefab('prefab/Block')
    const totalBlock = Sizes['高难度'] ** 2
    for (let i = 0; i < totalBlock; i++) {
      const node = instantiate(prefab)
      this.__initialBlocks.push(node)
    }
  }

  __startGame() {
    if (this.__startTimer) return
    this.__startTimer = setInterval(() => {
      this.__startTime.value++
    }, 1000)
  }

  __bindReactive() {
    const flagLabel = this.TopBarNode.node.getChildByPath('Background/Flag').getChildByName('Label')
    const timeLabel = this.TopBarNode.node.getChildByPath('Background/Time').getChildByName('Label').getComponent(Label)
    reactivity(this.__thunderStore.flagCount, { key: 'string', node: flagLabel, component: Label })
    reactivity(this.__startTime, { target: timeLabel, key: 'string' })
    reactivity(this.TopBarNode.getComponent(TopBar).Select.getComponent(Select).__currentOption, (val: keyof typeof Sizes) => {
      this.__level = val
      this._update()
    }, {
      immediate: false
    })
  }

  async start() {
    _wx.showLoading({
      title: '正在初始化数据'
    })
    await this.__initBlocks()
    this.__bindReactive()

    emitter.on('win', () => this.__win())

    emitter.on('gameover', () => this.__gameover())
    emitter.on('start', () => this.__startGame())
    this.Result.node.active = false
    this.Restart.node.on('click', () => {
      this.__restart()
    }, this)

    this.__windowSize = view.getVisibleSize()
    this.__startX = -(this.__windowSize.width / 2)
    this.__TopBar = this.node.getChildByName('TopBar').getComponent(UITransform)
    this.__startY = -this.__TopBar.height
    this._update()
    _wx.hideLoading()
  }

  __initThunders() {
    const totalBlock = Sizes[this.__level] ** 2
    const totalThunder = Thunders[this.__level]
    this.__thunderStore.thunderCount.value = totalThunder
    this.__thunders = new Array(totalBlock - totalThunder).fill(false).concat(new Array(totalThunder).fill(true)).sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5).sort(() => Math.random() - 0.5)
    this.__thunderStore.thunderCount.value = totalThunder
    this.__thunderStore.totalCount.value = totalBlock
  }

  async __insertBlock() {
    // const prefab = await loadPrefab('prefab/Block')
    let startColorIndex = 1
    let colorIndex = 0
    let index = 0
    const blocks: Block[][] = []
    this.__blocks = []

    // const totalBlock = Sizes[this.level] ** 2
    const childrenBlockLen = this.node.children.length - 2
    for (let i = 0; i < Sizes[this.__level]; i++) {
      startColorIndex = (startColorIndex + 1) % 2
      colorIndex = (startColorIndex + 1) % 2
      blocks[i] = []
      this.__blocks[i] = []
      for (let j = 0; j < Sizes[this.__level]; j++) {
        colorIndex = (colorIndex + 1) % 2
        const block = this.__initialBlocks[index]
        const __blockScript = block.getComponent(Block)
        blocks[i][j] = __blockScript
        this.__blocks[i][j] = block
        __blockScript.__init()
        __blockScript.__updateInfo([this.__blockSize, this.__blockSize], colorIndex)
        __blockScript.__position = [i, j]
        __blockScript.__originBlocks = blocks
        __blockScript.__isThunder = this.__thunders.pop()
        block.setPosition(i * this.__blockSize + this.__startX, -((j + 1) * this.__blockSize) + this.__startY)
        // debugger
        if (index >= childrenBlockLen)
          this.node.addChild(block)

        block.setSiblingIndex(0)
        index++
      }
    }
    let next = this.__initialBlocks[index]
    while (next) {
      if (next.name === 'Block')
        next.removeFromParent()
      index++
      next = this.__initialBlocks[index]
    }
  }

  _update() {
    this.__startTime.value = 0
    this.__thunderStore.end.value = false
    this.__blockSize = this.__windowSize.width / Sizes[this.__level]
    this.__removeBlockNode()
    this.__thunderStore.reset()
    this.__initThunders()
    this.__insertBlock()
  }

  __removeBlockNode() {
    // for (let i = 0; i < this.node.children.length; i++) {
    //   const child = this.node.children[i]
    //   if (child.name === 'Block')
    //     // child.destroy()
    //     child.removeFromParent()
    // }
  }

  __restart() {
    this._update()
  }

  __showResult(info: Info) {
    this.Result.node.active = true
    const result = this.Result.getComponent(Result)
    result.__updateInfo(info)
    // this.startTime.value = 0
  }

  __win() {
    clearInterval(this.__startTimer)
    this.__thunderStore.end.value = true
    this.__startTimer = 0
    const info = {
      time: `${this.__startTime.value}S`,
      rank: '暂无'
    }
    this.__showResult(info)
  }

  __gameover() {
    clearInterval(this.__startTimer)
    this.__thunderStore.end.value = true
    this.__startTimer = 0
    const info = {
      time: '--',
      rank: '--'
    } as Info
    this.__showResult(info)
  }
}
