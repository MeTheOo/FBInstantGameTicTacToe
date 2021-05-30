const {ccclass, property} = cc._decorator;
import {Constants} from "./Constants";

@ccclass
export default class NewClass extends cc.Component {

  @property(cc.Sprite)
  oIcon: cc.Sprite = null;

  @property(cc.Sprite)
  xIcon: cc.Sprite = null;

  // update (dt) {}
  public doGameOver(turn : Constants.Turn)
  {
    this.oIcon.enabled = turn == Constants.Turn.X;
    this.xIcon.enabled = turn == Constants.Turn.O; 
  }
}
