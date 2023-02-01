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

  Widget: Widget
  initSize = { top: 0, bottom: 0 }
  active = ref(false)
  currentOption = ref('低难度')
  optionComp: Options
  options = ref(['低难度', '中难度', '高难度'])

  bindReactivity() {
    reactivity(this.currentOption, { target: this.Current.node.getChildByPath('Label').getComponent(Label), key: 'string' })
    reactivity(this.active, val => {
      if (val) this.Widget.bottom = -this.optionComp.buttonHeight.value + this.initSize.bottom
      else this.Widget.bottom = this.initSize.bottom
      this.Options.getComponent(Widget).top = this.Current.getComponent(UITransform).height
      this.Current.getComponent(Widget).top = 0
    })
  }

  start() {
    this.Widget = this.node.getComponent(Widget)
    this.initSize = { top: this.Widget.top, bottom: this.Widget.bottom }
    this.optionComp = this.Options.node.getComponent(Options)
    this.optionComp.options = this.options
    this.Current.node.on('click', () => {
      this.active.value = !this.active.value
    })
    emitter.on('select', (value: string) => this.onSelect(value))
    this.Current.node.getChildByPath('Label').getComponent(Label).string = this.currentOption.value
    this.bindReactivity()
    input.on(Input.EventType.TOUCH_START, () => {
      this.active.value = false
    })

    emitter.on(Input.EventType.TOUCH_START, () => {
      this.active.value = false
    })
  }

  onSelect(value: string) {
    this.currentOption.value = value
    this.active.value = false
  }
}

