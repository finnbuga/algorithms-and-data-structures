import CompleteBinaryTree from "./CompleteBinaryTree";

/**
 * A Complete Binary Tree can be implemented using an array:
 * Associate an index to each node, depending on its position in the tree:
 * start with 0 for the root and move down from left to right.
 * The last index in the array will correspond to the Last Node.
 *
 * A node's parent and children indexes can be calculated:
 * leftChild = node * 2 + 1
 * rightChild = node * 2 + 2
 * parent = Math.floor((node - 1) / 2)
 */
export default class CompleteBinaryTreeInArray<Value>
  implements CompleteBinaryTree<number, Value> {
  private nodes: Value[] = [];

  get root(): number {
    return !this.isEmpty() ? 0 : null;
  }

  get lastNode(): number {
    return !this.isEmpty() ? this.nodes.length - 1 : null;
  }

  isEmpty(): boolean {
    return this.nodes.length === 0;
  }

  /**
   * Get parent node
   *
   * Use formula: parent = Math.floor((node - 1) / 2).
   */
  getParent(node: number): number {
    if (node === this.root) {
      return null;
    }

    return Math.floor((node - 1) / 2);
  }

  /**
   * Get left child node
   *
   * Use formula: leftChild = node * 2 + 1.
   */
  getLeftChild(node: number): number {
    const leftChild: number = node * 2 + 1;
    return leftChild < this.nodes.length ? leftChild : null;
  }

  /**
   * Get right child node
   *
   * Use formula: rightChild = node * 2 + 2.
   */
  getRightChild(node: number): number {
    const rightChild: number = node * 2 + 2;
    return rightChild < this.nodes.length ? rightChild : null;
  }

  insert(value: Value): void {
    this.nodes.push(value);
  }

  removeLastNode(): void {
    this.nodes.pop();
  }

  swapNodes(n1: number, n2: number): void {
    [this.nodes[n1], this.nodes[n2]] = [this.nodes[n2], this.nodes[n1]];
  }

  getValue(node: number): Value {
    return this.nodes[node];
  }
}
