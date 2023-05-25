import { Button, Component, Input, Label, Layout, UITransform, Widget, _decorator, input } from 'cc'
import { emitter } from '../Utils'
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
  __active = false
  __currentOption = '低难度'
  __optionComp: Options
  __options = ['低难度', '中难度', '高难度']

  get _currentOptionTarget() {
    return this.Current.node.getChildByPath('Label').getComponent(Label)
  }

  __updateActive() {
    if (this.__active) this.__Widget.bottom = -this.__optionComp.__buttonHeight + this.__initSize.bottom
      else this.__Widget.bottom = this.__initSize.bottom
      this.Options.getComponent(Widget).top = this.Current.getComponent(UITransform).height
      this.Current.getComponent(Widget).top = 0
  }

  start() {
    this.__Widget = this.node.getComponent(Widget)
    this.__initSize = { top: this.__Widget.top, bottom: this.__Widget.bottom }
    this.__optionComp = this.Options.node.getComponent(Options)
    this.__optionComp.__options = this.__options
    this.Current.node.on('click', () => {
      this.__active = !this.__active
      this.__updateActive()
    })
    emitter.on('select', (value: string) => this.__onSelect(value))
    this._currentOptionTarget.string = this.__currentOption
    input.on(Input.EventType.TOUCH_START, () => {
      this.__active = false
    })

    emitter.on(Input.EventType.TOUCH_START, () => {
      this.__active = false
    })
    emitter.emit('difficulty', this.__currentOption)
  }

  __onSelect(value: string) {
    this.__currentOption = value
    emitter.emit('difficulty', value)
    this._currentOptionTarget.string = value
    this.__active = false
  }
}

