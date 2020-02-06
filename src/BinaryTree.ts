export default interface BinaryTree<Node> {
  isEmpty(): boolean;

  getRoot(): Node;

  getParent(node: Node): Node;

  getLeftChild(node: Node): Node;

  getRightChild(node: Node): Node;
}
