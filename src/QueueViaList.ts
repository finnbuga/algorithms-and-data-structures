import type Queue from "./Queue";

class Node<T = unknown> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}

export default class QueueViaList<T = unknown> implements Queue<T> {
  constructor(public head: Node<T> | null = null) {}

  add(value: T) {
    if (this.isEmpty()) {
      this.head = new Node(value);
      return;
    }

    this.queue.next = new Node(value);
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }

    const { value } = this.head;
    this.head = this.head.next;

    return value;
  }

  peek() {
    return this.head.value;
  }

  isEmpty() {
    return this.head === null;
  }

  private get queue() {
    let queue = this.head;
    while (queue.next) {
      queue = queue.next;
    }

    return queue;
  }
}
