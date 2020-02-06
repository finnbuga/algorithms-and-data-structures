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
  /**
   * Insert value
   *
   * Insert new node as Last Node such that to maintain a Complete Binary Tree
   * (see the explanation on the Last Node in this interface's description)
   */
  insert(value: Value): Node;

  /**
   * Remove Last Node
   *
   * Only the Last Node can be removed such that to maintain a Complete Binary Tree
   * (see the explanation on the Last Node in this interface's description)
   */
  removeLastNode(): void;
}
