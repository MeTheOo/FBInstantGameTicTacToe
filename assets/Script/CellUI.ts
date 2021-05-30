const {ccclass, property} = cc._decorator;
import {Constants} from "./Constants";

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    oIcon: cc.Sprite = null;

    @property(cc.Sprite)
    xIcon: cc.Sprite = null;

    @property(cc.Button)
    button: cc.Button;

    start () {
      this.reset();
    }

    reset() {
      this.oIcon.enabled = false;
      this.xIcon.enabled = false; 
      this.button.interactable = true;
    }

    updateState(turn : Constants.Turn) {
      this.oIcon.enabled = turn == Constants.Turn.X;
      this.xIcon.enabled = turn == Constants.Turn.O; 
      this.button.interactable = false;
    }
}
