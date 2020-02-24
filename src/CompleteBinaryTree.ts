import BinaryTree from "./BinaryTree";

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
 */
export default interface CompleteBinaryTree<Node, Value>
  extends BinaryTree<Node> {
  lastNode: Node;

  /**
   * Insert as Last Node to maintain a Complete Binary Tree
   */
  insert(value: Value): void;

  /**
   * Only the Last Node can be removed in a Complete Binary Tree
   */
  removeLastNode(): void;

  /**
   * Swap nodes to change the current structure.
   * Swap nodes with the Last Node to add / remove nodes
   * as these operations can only be performed on the Last Node.
   */
  swapNodes(n1: Node, n2: Node): void;
}
