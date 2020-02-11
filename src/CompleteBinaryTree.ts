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
   * Insert value
   *
   * Insert new node as Last Node such that to maintain a Complete Binary Tree
   * (see the explanation on the Last Node in this interface's description)
   */
  insert(value: Value): void;

  /**
   * Remove Last Node
   *
   * Only the Last Node can be removed such that to maintain a Complete Binary Tree
   * (see the explanation on the Last Node in this interface's description)
   */
  removeLastNode(): void;

  /**
   * Swap nodes
   *
   * This is useful for rearanging nodes inside the tree without remove / insert operations.
   * In order to keep the Complete quality, nodes can't be removed or inserted
   * (except for the Last Node position). However, nodes can be inserted as Last Node
   * then swapped into the right position. Or they can be swapped with the Last Node
   * then removed.
   */
  swapNodes(n1: Node, n2: Node): void;
}
