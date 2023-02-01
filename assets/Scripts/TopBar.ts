import { Component, Layout, _decorator } from 'cc'
const { ccclass, property } = _decorator

@ccclass('TopBar')
export class TopBar extends Component {
  @property({ type: Layout })
  Select: Layout
}

