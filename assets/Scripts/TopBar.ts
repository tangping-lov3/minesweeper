import { Component, Layout, UITransform, Widget, _decorator } from 'cc'
const { ccclass, property } = _decorator

@ccclass('TopBar')
export class TopBar extends Component {
  @property({ type: Layout })
  Select: Layout

  start() {
    const widget = this.node.getComponent(Widget)
    const uiTransform = this.node.getComponent(UITransform)
    widget.left = 1
    console.log(widget, uiTransform.contentSize, this.node.parent.parent.getComponent(UITransform).contentSize)
  }
}

