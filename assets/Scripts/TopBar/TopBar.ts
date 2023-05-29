import { Component, Layout, Widget, _decorator } from 'cc'
const { ccclass, property } = _decorator

@ccclass('TopBar')
export class TopBar extends Component {
  @property({ type: Layout })
  Select: Layout

  start() {
    const widget = this.node.getComponent(Widget)
    widget.left = 1
  }
}

