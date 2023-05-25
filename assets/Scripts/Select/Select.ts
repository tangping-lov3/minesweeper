import { Button, Component, Input, Label, Layout, UITransform, Widget, _decorator, input } from 'cc'
import { emitter, reactivity, ref } from '../Utils'
import { Options } from './Option'

const { ccclass, property } = _decorator

@ccclass('Select')
export class Select extends Component {
  @property({ type: Layout })
  Options: Layout

  @property({ type: Button })
  Current: Button

  __Widget: Widget
  __initSize = { top: 0, bottom: 0 }
  __active = ref(false)
  __currentOption = ref('低难度')
  __optionComp: Options
  __options = ref(['低难度', '中难度', '高难度'])

  __bindReactivity() {
    reactivity(this.__currentOption, { target: this.Current.node.getChildByPath('Label').getComponent(Label), key: 'string' })
    reactivity(this.__active, val => {
      if (val) this.__Widget.bottom = -this.__optionComp.__buttonHeight.value + this.__initSize.bottom
      else this.__Widget.bottom = this.__initSize.bottom
      this.Options.getComponent(Widget).top = this.Current.getComponent(UITransform).height
      this.Current.getComponent(Widget).top = 0
    })
  }

  start() {
    this.__Widget = this.node.getComponent(Widget)
    this.__initSize = { top: this.__Widget.top, bottom: this.__Widget.bottom }
    this.__optionComp = this.Options.node.getComponent(Options)
    this.__optionComp.__options = this.__options
    this.Current.node.on('click', () => {
      this.__active.value = !this.__active.value
    })
    emitter.on('select', (value: string) => this.__onSelect(value))
    this.Current.node.getChildByPath('Label').getComponent(Label).string = this.__currentOption.value
    this.__bindReactivity()
    input.on(Input.EventType.TOUCH_START, () => {
      this.__active.value = false
    })

    emitter.on(Input.EventType.TOUCH_START, () => {
      this.__active.value = false
    })
  }

  __onSelect(value: string) {
    this.__currentOption.value = value
    this.__active.value = false
  }
}

