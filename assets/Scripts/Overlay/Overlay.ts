import { Color, Component, Node, Sprite, UITransform, _decorator, view } from 'cc'
const { ccclass } = _decorator

@ccclass('Overlay')
export class Overlay extends Component {
  winSize = view.getVisibleSize()

  start() {
    this.initOverlay()
  }

  async initOverlay() {
    const layout = new Node('layout')
    layout.addComponent(UITransform)
    layout.getComponent(UITransform).setContentSize(this.winSize.width, this.winSize.height)
    layout.addComponent(Sprite)
    layout.getComponent(Sprite).color = new Color(0, 0, 0, 0.5)
    this.node.addChild(layout)
    layout.setSiblingIndex(2)
    layout.setWorldPosition(0, 0, 0)
  }
}

