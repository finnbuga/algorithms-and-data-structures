import CompleteBinaryTreeInArray from "./CompleteBinaryTreeInArray";

/**
 * A Min-Heap is a Complete Binary Tree in which any parent node value is less than its children's.
 */
export default class MinHeap extends CompleteBinaryTreeInArray<number> {
  
  /**
   * Insert as Last Node such that to maintain a Complete Binary Tree
   * O(log n) time.
   */
  insert(value: number): void {
    if (value == null || Number.isNaN(value)) {
      throw new TypeError("Cannot insert undefined, null or NaN values");
    }

    super.insert(value);
    this.bubbleUp(this.lastNode);
  }

  /**
   * The min value is in the root node.
   * We can't remove the root in a Complete Binary Tree. 
   * Only the Last Node can be removed, so swap it with root, then remove it.
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
