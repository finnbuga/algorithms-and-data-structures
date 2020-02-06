import CompleteBinaryTreeInArray from "./CompleteBinaryTreeInArray";

/**
 * A Min-Heap is a Complete Binary Tree in which
 * the value of each node is less than the values in the node's children.
 */
export default class MinHeap extends CompleteBinaryTreeInArray<number> {
  /**
   * Insert value
   *
   * Insert new node as Last Node such that to maintain a Complete Binary Tree
   * (see the explanation on the Last Node in the Complete Binary Tree interface description)
   * In order to keep the Min-Heap quality, the new node might have to
   * be moved higher in the tree (bubbled up) until it's bigger than its parent and
   * smaller than its children.
   *
   * O(log n) time.
   */
  insert(value: number) {
    if (value === undefined || value === null || Number.isNaN(value)) {
      throw new TypeError("Cannot insert undefined, null or NaN values");
    }
    super.insert(value);
    return this.bubbleUpSmallValue(this.getLastNode());
  }

  /**
   * Extract min
   *
   * The min value is in the root node.
   * It's not possible to just remove the root node. The only place to remove
   * a node in a Complete Binary Tree is the Last Node.
   * (see the explanation on the Last Node in the Complete Binary Tree interface description)
   * In order to keep the Min-Heap quality, the new root needs to be replaced with the minimum
   * which is one of its children. Then repeat the process with its new children (sink it down)
   * until it's smaller than them.
   *
   * O(log n) time
   */
  extractMin(): number {
    if (this.isEmpty()) {
      return null;
    }

    const minValue: number = this.nodes[this.getRoot()];

    this.swapNodes(this.getRoot(), this.getLastNode());
    this.removeLastNode();

    if (!this.isEmpty()) {
      this.sinkDownBigValue(this.getRoot());
    }

    return minValue;
  }

  /**
   * Bubble up small value
   *
   * Check if the given node is smaller than its parent and swap them if so.
   * Continue the process from the new position.
   * Return the node once the swapping is complete.
   */
  private bubbleUpSmallValue(node: number): number {
    const parent: number = this.getParent(node);

    if (parent && this.nodes[node] < this.nodes[parent]) {
      this.swapNodes(node, parent);
      return this.bubbleUpSmallValue(parent);
    } else {
      return node;
    }
  }

  /**
   * Sink down big value
   *
   * Check if the given node is bigger than its children and swap them if so.
   * Continue the process from the new position.
   */
  private sinkDownBigValue(node: number): void {
    const smallestChild: number = this.getSmallestChild(node);

    if (smallestChild && this.nodes[smallestChild] < this.nodes[node]) {
      this.swapNodes(node, smallestChild);
      this.sinkDownBigValue(smallestChild);
    }
  }

  private getSmallestChild(node: number): number {
    const left: number = this.getLeftChild(node);
    const right: number = this.getRightChild(node);

    const leftIsSmaller = left && right && this.nodes[left] < this.nodes[right];

    return !right || leftIsSmaller ? left : right;
  }

  private swapNodes(n1: number, n2: number): void {
    [this.nodes[n1], this.nodes[n2]] = [this.nodes[n2], this.nodes[n1]];
  }
}
