import { Component, _decorator } from 'cc'
const { ccclass } = _decorator

@ccclass('TopBar')
export class TopBar extends Component {
  start() {
    console.log(this)
  }
}

