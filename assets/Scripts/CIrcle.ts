import { Component, _decorator } from 'cc'
const { ccclass } = _decorator

@ccclass('Circle')
export class Circle extends Component {
  show() {
    this.node.active = true
  }
}

