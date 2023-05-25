import { Button, Component, Label, Layout, _decorator } from 'cc'
import { Init } from '../Init'

const { ccclass, property } = _decorator

@ccclass('Result')
export class Result extends Component {
  @property({ type: Layout })
  Time: Layout

  @property({ type: Layout })
  Rank: Layout

  @property({ type: Button })
  Restart: Button

  @property({ type: Button })
  Close: Button

  start() {
    this.Restart.node.on('click', () => {
      this.node.parent.getComponent(Init).__restart()
      this.node.active = false
    }, this)

    this.Close.node.on('click', () => {
      this.node.active = false
    })
  }

  __updateInfo(info: Info) {
    const len = this.node.parent.children.length
    this.node.setSiblingIndex(len - 1)
    this.Time.node.getChildByName('Label').getComponent(Label).string = `${info.time}`
    this.Rank.node.getChildByName('Label').getComponent(Label).string = `排名: ${info.rank}`
  }
}

export interface Info {
  time: string
  rank: string | number
}

