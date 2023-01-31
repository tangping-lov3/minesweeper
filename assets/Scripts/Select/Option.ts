import type { Node } from 'cc'
import { Component, Label, UITransform, Widget, _decorator, instantiate } from 'cc'

import type { Ref } from '../Utils'
import { emitter, loadPrefab, reactivity, ref } from '../Utils'
const { ccclass } = _decorator

@ccclass('Options')
export class Options extends Component {
  options: Ref<string[]>

  buttons: readonly Node[]
  buttonHeight = ref(0)

  bindReactivity() {
    reactivity(this.options, val => {
      this.buttons.forEach((button, i) => {
        this.bindEvent(button, val[i])
        button.getChildByPath('Label').getComponent(Label).string = val[i]
      })
    }, { deep: true })

    reactivity(this.buttonHeight, { target: this.node.getComponent(UITransform), key: 'height' })
  }

  async start() {
    this.buttons = this.node.children
    await this.initButtons()
    this.bindReactivity()
    this.node.getComponent(Widget).top = this.buttonHeight.value / this.options.value.length
  }

  bindEvent(node: Node, value: string) {
    node.off('click')
    node.on('click', () => this.onClick(value))
  }

  onClick(value: string) {
    emitter.emit('select', value)
  }

  async initButtons() {
    const prefab = await loadPrefab('prefab/Option')
    let height = 0
    this.options.value.forEach((option, index) => {
      const button = instantiate(prefab)
      this.node.addChild(button)
      this.bindEvent(button, option)
      height = button.getComponent(UITransform).height
      button.getComponent(Widget).top = height * index
      button.getChildByPath('Label').getComponent(Label).string = option
    })
    this.buttonHeight = ref(height * this.options.value.length)
  }
}

