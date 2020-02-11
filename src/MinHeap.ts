import CompleteBinaryTreeInArray from "./CompleteBinaryTreeInArray";

/**
 * A Min-Heap is a Complete Binary Tree in which any parent node value is less than its children's.
 */
export default class MinHeap extends CompleteBinaryTreeInArray<number> {
  /**
   * Insert value
   *
   * Insert as Last Node such that to maintain a Complete Binary Tree
   * (see the explanation on the Last Node in the Complete Binary Tree interface description
   * https://github.com/zendka/algorithms-and-data-structures/blob/master/src/CompleteBinaryTree.ts)
   *
   * Then "bubble up" the node: move it higher in the tree until the Min-Heap is restored
   * i.e. parent's value is less than its childrens'.
   *
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
   * Extract min
   *
   * The min value is in the root node.
   * It's not possible to just remove the root in a Complete Binary Tree quality.
   * Only the Last Node can be removed, so swipe it with root, then remove it.
   * (see the explanation on the Last Node in the Complete Binary Tree interface description
   * https://github.com/zendka/algorithms-and-data-structures/blob/master/src/CompleteBinaryTree.ts)
   *
   * The new root is not necessarily the smallest value.
   * We need to "sink down" the new root: move it down until the Min-Heap is restored
   * i.e. parent's value is smaller than its children's.
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

  /**
   * Bubble up small value
   *
   * Swap node with parent if not in the Min-Heap order (parent less than children)
   */
  private bubbleUp(node: number) {
    const parent: number = this.getParent(node);

    if (parent !== null && this.getValue(node) < this.getValue(parent)) {
      this.swapNodes(node, parent);
      this.bubbleUp(parent);
    }
  }

  /**
   * Sink down big value
   *
   * Swap node with children if not in the Min-Heap order (parent less than children)
   */
  private sinkDown(node: number): void {
    const smallestChild: number = this.getSmallestChild(node);

    if (smallestChild && this.getValue(smallestChild) < this.getValue(node)) {
      this.swapNodes(node, smallestChild);
      this.sinkDown(smallestChild);
    }
  }

  private getSmallestChild(node: number): number {
    const left: number = this.getLeftChild(node);
    const right: number = this.getRightChild(node);

    if (right === null) return left;
    if (left === null) return right;
    return this.getValue(left) < this.getValue(right) ? left : right;
  }
}
