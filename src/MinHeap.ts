import CompleteBinaryTreeInArray from "./CompleteBinaryTreeInArray";
import Node from "./NodeWithIndex";

/**
 * A Min-Heap is a Complete Binary Tree in which
 * the value of each node is less than the values in the node's children
 */
export default class MinHeap extends CompleteBinaryTreeInArray {
  /**
   * Insert a value and make sure the tree remains a Min-Heap.
   */
  insert(value: number): void {
    const node = this.insertValueAtTheEnd(value);
    this.bubbleUpSmallValue(node);
  }

  private bubbleUpSmallValue(node: Node): void {
    const parent: Node = this.getParent(node);
    if (parent && node.value < parent.value) {
      this.swapValuesBetweenNodes(node, parent);
      this.bubbleUpSmallValue(parent);
    }
  }

  /**
   * Extract the min value. In a Min-Heap that's the root.
   * Then rearange the nodes so that the tree remains a Min-Heap.
   */
  extractMin(): any {
    if (this.isEmpty()) {
      return null;
    }

    const minValue: number = this.getRoot().value;

    this.swapValuesBetweenNodes(this.getRoot(), this.getLastNode());
    this.removeLastNode();

    if (!this.isEmpty()) {
      this.bubbleDownSmallValue(this.getRoot());
    }

    return minValue;
  }

  private bubbleDownSmallValue(node: Node): void {
    const smallestChild: Node = this.getSmallestChild(node);

    if (smallestChild && smallestChild.value < node.value) {
      this.swapValuesBetweenNodes(node, smallestChild);
      this.bubbleDownSmallValue(smallestChild);
    }
  }

  private getSmallestChild(node: Node): Node {
    const leftChild: Node = this.getLeftChild(node);
    const rightChild: Node = this.getRightChild(node);

    return rightChild === null ||
      (leftChild !== null && leftChild.value < rightChild.value)
      ? leftChild
      : rightChild;
  }
}
