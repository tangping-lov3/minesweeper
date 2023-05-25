import type { Node } from 'cc'
import { Component, Label, UITransform, Widget, _decorator, instantiate } from 'cc'

import { emitter, loadPrefab } from '../Utils'
const { ccclass } = _decorator

@ccclass('Options')
export class Options extends Component {
  __options: string[]

   get _options() {
    return this.__options
   }

   set _options(value: string[]) {
      this.__options = value
      this.__buttons.forEach((button, i) => {
        this.__bindEvent(button, value[i])
        button.getChildByPath('Label').getComponent(Label).string = value[i]
      })
    }

  __buttons: readonly Node[]
  __buttonHeight = 0

  get __buttonHeightTarget() {
    return this.node.getComponent(UITransform)
  }

  async start() {
    this.__buttons = this.node.children
    await this.__initButtons()
    this.node.getComponent(Widget).top = this.__buttonHeight / this.__options.length
  }

  __bindEvent(node: Node, value: string) {
    node.off('click')
    node.on('click', () => this.onClick(value))
  }

  onClick(value: string) {
    emitter.emit('select', value)
  }

  async __initButtons() {
    const prefab = await loadPrefab('prefab/Option')
    let height = 0
    this.__options.forEach((option, index) => {
      const button = instantiate(prefab)
      this.node.addChild(button)
      this.__bindEvent(button, option)
      height = button.getComponent(UITransform).height
      button.getComponent(Widget).top = height * index
      button.getChildByPath('Label').getComponent(Label).string = option
    })
    this.__buttonHeight = height * this.__options.length
    this.__buttonHeightTarget.height = this.__buttonHeight
  }
}

