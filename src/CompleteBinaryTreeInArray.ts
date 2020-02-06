import CompleteBinaryTree from "./CompleteBinaryTree";

/**
 * A Complete Binary Tree has all levels fully filled except perhaps the last one
 * where the nodes are filled from left to right.
 *
 * The right most node on the last level is called the Last Node (5 in the example bellow).
 * This is an important position in a Complete Binary Tree as it's the only position
 * where nodes can be added or removed and still keep the Complete and Binary qualities of the tree
 *
 *        0
 *      /   \
 *     1     2
 *    /\    /
 *   3  4  5
 *
 * This data structure can be implemented using an array:
 * Associate each node with an index: starting with 0 for the root and moving down from left to right.
 * The Last Node will therefore have the last index in the array.
 *
 * A node's parent and children can be calculated based on its index:
 * leftChild = node * 2 + 1
 * rightChild = node * 2 + 2
 * parent = Math.floor((node - 1) / 2)
 */
export default class CompleteBinaryTreeInArray<Value>
  implements CompleteBinaryTree<number, Value> {
  protected nodes: Value[] = [];

  isEmpty(): boolean {
    return this.nodes.length === 0;
  }

  /**
   * Get root node
   */
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
    return this.containsNode(leftChild) ? leftChild : null;
  }

  /**
   * Get right child node
   *
   * Use formula: rightChild = node * 2 + 2.
   */
  getRightChild(node: number): number {
    const rightChild: number = node * 2 + 2;
    return this.containsNode(rightChild) ? rightChild : null;
  }

  /**
   * Insert value
   *
   * Insert new node as Last Node such that to maintain a Complete Binary Tree
   * (see the explanation on the Last Node in this class' description)
   */
  insert(value: Value): void {
    this.nodes.push(value);
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

  private containsNode(node: number): Boolean {
    return node < this.nodes.length;
  }
}
