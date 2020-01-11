import Node from "./Node";

export default class NodeWithIndex extends Node {
  private _index: number;

  public set index(i: number) {
    if (!Number.isInteger(i) || i < 0) {
      throw "index needs to be a positive integer";
    }
    this._index = i;
  }

  public get index(): number {
    return this._index;
  }
}
