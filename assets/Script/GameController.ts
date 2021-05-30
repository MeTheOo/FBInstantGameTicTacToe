const {ccclass, property} = cc._decorator;
import CellUI from "./CellUI";
import GameOverUI from "./GameOverUI";
import { Constants } from "./Constants";

@ccclass
export default class NewClass extends cc.Component 
{
  @property(cc.Label)
  label: cc.Label = null;

  // Reference to cells 
  @property(cc.Button)
  cellList: cc.Button[] = new Array<cc.Button>();

  // Cell data
  @property(Number)
  cellData: number[] = new Array<number>();

  @property({type:cc.Enum(Constants.Turn)})
  currentTurn: Constants.Turn = Constants.Turn.X;

  @property(cc.Node)
  gameoverPanel: cc.Node;

  start () {

  }

  public onCellBtnDown(event, data)
  {
    // Disable this cell
    let node = event.target;
    let cellUI = node.getComponent(CellUI);
    cellUI.updateState(this.currentTurn);
    this.cellData[data] = this.currentTurn == Constants.Turn.X ? 1: 2;
    this.calculateWinner(this.currentTurn);
    this.currentTurn = this.currentTurn == Constants.Turn.X ? Constants.Turn.O : Constants.Turn.X;
  }

  public resetData()
  {
    for (let i = 0; i < this.cellData.length; ++i)
    {
      this.cellData[i] = 0;
    }
    for(let i = 0; i < this.cellList.length; ++i)
    {
      let cellUI = this.cellList[i].getComponent(CellUI);
      cellUI.reset();
    }
    this.currentTurn = Constants.Turn.X;
    this.gameoverPanel.active = false;
  }

  public calculateWinner(turn : Constants.Turn)
  {
    console.error(this.cellData);
    if (this.IsMatched(0, 3, 6))
    {
      const gameoverUI = this.gameoverPanel.getComponent(GameOverUI);
      gameoverUI.doGameOver(turn);
      this.gameoverPanel.active = true;
    }
    else if (this.IsMatched(1, 4, 7))
    {
      const gameoverUI = this.gameoverPanel.getComponent(GameOverUI);
      gameoverUI.doGameOver(turn);
      this.gameoverPanel.active = true;
    }
    else if (this.IsMatched(2, 5, 8))
    {
      const gameoverUI = this.gameoverPanel.getComponent(GameOverUI);
      gameoverUI.doGameOver(turn);
      this.gameoverPanel.active = true;
    }
    else if (this.IsMatched(0, 1, 2))
    {
      const gameoverUI = this.gameoverPanel.getComponent(GameOverUI);
      gameoverUI.doGameOver(turn);
      this.gameoverPanel.active = true;
    }
    else if (this.IsMatched(3, 4, 5))
    {
      const gameoverUI = this.gameoverPanel.getComponent(GameOverUI);
      gameoverUI.doGameOver(turn);
      this.gameoverPanel.active = true;
    }
    else if (this.IsMatched(6, 7, 8))
    {
      const gameoverUI = this.gameoverPanel.getComponent(GameOverUI);
      gameoverUI.doGameOver(turn);
      this.gameoverPanel.active = true;
    }
    else if (this.IsMatched(0, 4, 8))
    {
      const gameoverUI = this.gameoverPanel.getComponent(GameOverUI);
      gameoverUI.doGameOver(turn);
      this.gameoverPanel.active = true;
    }
    else if (this.IsMatched(2, 4, 6))
    {
      const gameoverUI = this.gameoverPanel.getComponent(GameOverUI);
      gameoverUI.doGameOver(turn);
      this.gameoverPanel.active = true;
    }
  }

  public IsMatched(index0 : number, index1 : number, index2 : number)
  {
    if (this.cellData[index0] == 0)
      return false;
    if (this.cellData[index1] == 0)
      return false;
    if (this.cellData[index2] == 0)
      return false;
    if (this.cellData[index0] == this.cellData[index1] && this.cellData[index1] == this.cellData[index2])
      return true;
    return false;
  }
}