export default class GraphNode<T> {
  neighbours: GraphNode<T>[] = [];
  visited: boolean = false;

  constructor(public value: T) {}
}
