import Node from "./Node";

export default interface IBinaryTree {
  getRoot(): Node;

  getParent(node: Node): Node;

  getLeftChild(node: Node): Node;

  getRightChild(node: Node): Node;
}
