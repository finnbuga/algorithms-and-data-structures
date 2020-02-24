import CompleteBinaryTreeInArray from "./CompleteBinaryTreeInArray";

/**
 * A Min-Heap is a Complete Binary Tree in which any parent node value is less than its children's.
 */
export default class MinHeap extends CompleteBinaryTreeInArray<number> {
  /**
   * Insert new value at the Last Node position and bubble it up to restore the Min-Hip
   *
   * O (log n) time
   */
  insert(value: number): void {
    if (value == null || Number.isNaN(value)) {
      throw new TypeError("Cannot insert undefined, null or NaN values");
    }

    super.insert(value);
    this.bubbleUp(this.lastNode);
  }

  /**
   * The min value is in the root node. Swipe it with the Last Node and remove it.
   * Then "sink down" the new root until to restore the Min-Heap
   *
   * O(log n) time
   */
  extractMin(): number {
    if (this.isEmpty()) {
      return null;
    }

    const min: number = this.getValue(this.root);

    this.swapNodes(this.root, this.lastNode);
    this.removeLastNode();

    if (!this.isEmpty()) {
      this.sinkDown(this.root);
    }

    return min;
  }

  private bubbleUp(node: number) {
    const parent: number = this.getParent(node);

    if (parent !== null && this.getValue(node) < this.getValue(parent)) {
      this.swapNodes(node, parent);
      this.bubbleUp(parent);
    }
  }

  private sinkDown(node: number): void {
    const smallestChild: number = this.getSmallestChild(node);

    if (
      smallestChild !== null &&
      this.getValue(smallestChild) < this.getValue(node)
    ) {
      this.swapNodes(node, smallestChild);
      this.sinkDown(smallestChild);
    }
  }

  private getSmallestChild(node: number): number {
    const left: number = this.getLeftChild(node);
    const right: number = this.getRightChild(node);

    if (left === null) return right;
    if (right === null) return left;
    return this.getValue(left) < this.getValue(right) ? left : right;
  }
}
