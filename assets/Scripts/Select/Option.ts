import type { Node } from 'cc'
import { Component, Label, UITransform, Widget, _decorator, instantiate } from 'cc'

import type { Ref } from '../Utils'
import { emitter, loadPrefab, reactivity, ref } from '../Utils'
const { ccclass } = _decorator

@ccclass('Options')
export class Options extends Component {
  __options: Ref<string[]>

  __buttons: readonly Node[]
  __buttonHeight = ref(0)

  __bindReactivity() {
    reactivity(this.__options, val => {
      this.__buttons.forEach((button, i) => {
        this.__bindEvent(button, val[i])
        button.getChildByPath('Label').getComponent(Label).string = val[i]
      })
    }, { deep: true })

    reactivity(this.__buttonHeight, { target: this.node.getComponent(UITransform), key: 'height' })
  }

  async start() {
    this.__buttons = this.node.children
    await this.__initButtons()
    this.__bindReactivity()
    this.node.getComponent(Widget).top = this.__buttonHeight.value / this.__options.value.length
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
    this.__options.value.forEach((option, index) => {
      const button = instantiate(prefab)
      this.node.addChild(button)
      this.__bindEvent(button, option)
      height = button.getComponent(UITransform).height
      button.getComponent(Widget).top = height * index
      button.getChildByPath('Label').getComponent(Label).string = option
    })
    this.__buttonHeight = ref(height * this.__options.value.length)
  }
}

