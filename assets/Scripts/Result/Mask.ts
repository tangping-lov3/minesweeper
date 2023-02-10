import { Component, UITransform, _decorator, view } from 'cc'
const { ccclass } = _decorator

@ccclass('Mask')
export class Mask extends Component {
  start() {
    const { width, height } = view.getVisibleSize()
    this.node.getComponent(UITransform).setContentSize(width, height)
  }
}

