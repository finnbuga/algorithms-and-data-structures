import Node from "./NodeWithIndex";
import IBinaryTree from "./IBinaryTree";

/**
 * A Complete Binary Tree has all levels, except possibly the last one, fully filled
 * and, if the last level is not complete, the nodes of that level are filled from left to right.
 *
 *        0
 *      /   \
 *     1     2
 *    /\    /
 *   3  4  5
 *
 * One can associate each node with an index: starting with 0 at the root and moving down from left to right.
 * So an array is a convenient data structure to hold a Complete Tree.
 */
export default class CompleteBinaryTreeInArray implements IBinaryTree {
  private nodes: Node[] = [];

  getValues(): any[] {
    return this.nodes.map(node => node.value);
  }

  isEmpty(): boolean {
    return this.nodes.length === 0;
  }

  getRoot(): Node {
    return !this.isEmpty() ? this.nodes[0] : null;
  }

  getParent(node: Node): Node {
    if (node.index === 0) {
      return null;
    }

    // one needs to do some math in order to arrive at the equation bellow
    const parentIndex: number = Math.floor((node.index - 1) / 2);
    return this.nodes[parentIndex];
  }

  getLeftChild(node: Node): Node {
    // one needs to do some math in order to arrive at the equation bellow
    const index: number = node.index * 2 + 1;
    return index < this.nodes.length ? this.nodes[index] : null;
  }

  getRightChild(node: Node): Node {
    // one needs to do some math in order to arrive at the equation bellow
    const index: number = node.index * 2 + 2;
    return index < this.nodes.length ? this.nodes[index] : null;
  }

  /**
   * The last node is the right most node on the last level.
   * In the array representation that's the last element in the array.
   */
  getLastNode(): Node {
    return !this.isEmpty() ? this.nodes[this.nodes.length - 1] : null;
  }

  removeLastNode(): void {
    this.nodes.pop();
  }

  swapValuesBetweenNodes(n1: Node, n2: Node): void {
    [n1.value, n2.value] = [n2.value, n1.value];
  }

  /**
   * Insert a value while maintaining a Complete Tree
   * The only place: after the right most node on the last level
   * In the array representation that corresponds to the end of the array.
   */
  insertValueAtTheEnd(value: any): Node {
    const node = new Node(value);
    this.nodes.push(node);
    node.index = this.nodes.length - 1;

    return node;
  }
}
