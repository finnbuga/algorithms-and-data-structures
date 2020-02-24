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

  isEmpty(): boolean {
    return this.nodes.length === 0;
  }

  get root(): number {
    return !this.isEmpty() ? 0 : null;
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

  /**
   * Get the value of a given node
   */
  getValue(node: number): Value {
    return this.nodes[node];
  }

  /**
   * Get Last Node
   *
   * (see the explanation on the Last Node in this class' description)
   */
  get lastNode(): number {
    return !this.isEmpty() ? this.nodes.length - 1 : null;
  }

  /**
   * Remove Last Node
   *
   * Only the Last Node can be removed such that to maintain a Complete Binary Tree
   * (see the explanation on the Last Node in this class' description)
   */
  removeLastNode(): void {
    this.nodes.pop();
  }

  /**
   * Swap nodes
   *
   * This is useful for rearanging nodes inside the tree without remove / insert operations.
   * In order to keep the Complete quality, nodes can't be removed or inserted
   * (except for the Last Node position). However, nodes can be inserted as Last Node
   * then swapped into the right position. Or they can be swapped with the Last Node
   * then removed.
   */
  swapNodes(n1: number, n2: number): void {
    [this.nodes[n1], this.nodes[n2]] = [this.nodes[n2], this.nodes[n1]];
  }
}
