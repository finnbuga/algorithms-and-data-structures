export default interface BinaryTree<Node> {
  root: Node;

  isEmpty(): boolean;

  getParent(node: Node): Node;

  getLeftChild(node: Node): Node;

  getRightChild(node: Node): Node;
}
