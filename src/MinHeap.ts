export default class MinHeap {
  private nodes: number[] = [];

  public getNodes(): number[] {
    return this.nodes;
  }

  public insert(value: number): void {
    this.nodes.push(value);
    const lastNode: number = this.nodes.length - 1;
    this.bubbleUpNode(lastNode);
  }

  public extractMin(): number {
    if (this.nodes.length === 0) {
      return null;
    } else if (this.nodes.length === 1) {
      return this.nodes.pop();
    }

    const topNode: number = 0;
    const minValue: number = this.nodes[topNode];

    this.moveLastNodeToTop();
    this.bubbleDownNode(topNode);

    return minValue;
  }

  private bubbleUpNode(node: number): void {
    const parent: number = this.getParent(node);
    if (parent !== null && this.nodes[node] < this.nodes[parent]) {
      this.swapNodes(node, parent);
      this.bubbleUpNode(parent);
    }
  }

  private bubbleDownNode(node: number): void {
    const smallestChild: number = this.getSmallestChild(node);

    if (
      smallestChild !== null &&
      this.nodes[node] > this.nodes[smallestChild]
    ) {
      this.swapNodes(node, smallestChild);
      this.bubbleDownNode(smallestChild);
    }
  }

  private swapNodes(n1: number, n2: number): void {
    const n1Value: number = this.nodes[n1];
    this.nodes[n1] = this.nodes[n2];
    this.nodes[n2] = n1Value;
  }

  private getParent(n: number): number {
    return n > 0 ? Math.floor((n - 1) / 2) : null;
  }

  private getSmallestChild(node: number): number {
    const leftChild: number = this.getLeftChild(node);
    const rightChild: number = this.getRightChild(node);

    return rightChild === null ||
      (leftChild !== null && this.nodes[leftChild] < this.nodes[rightChild])
      ? leftChild
      : rightChild;
  }

  private getLeftChild(node: number): number {
    const i: number = node * 2 + 1;
    return i < this.nodes.length ? i : null;
  }

  private getRightChild(node: number): number {
    const i: number = node * 2 + 2;
    return i < this.nodes.length ? i : null;
  }

  private moveLastNodeToTop(): void {
    this.nodes[0] = this.nodes.pop();
  }
}
