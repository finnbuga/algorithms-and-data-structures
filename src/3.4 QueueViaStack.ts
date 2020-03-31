import Stack from "./Stack";
import Queue from "./Queue";

export default class QueueViaStack<T> implements Queue<T> {
  stack: Stack<T> = new Stack<T>();
  reverseStack: Stack<T> = new Stack<T>();

  add(value: T): void {
    this.stack.push(value);
  }

  remove(): T | undefined {
    if (this.reverseStack.isEmpty()) {
      this.transferToReverseStack();
    }
    return this.reverseStack.pop();
  }

  peek(): T | undefined {
    if (this.reverseStack.isEmpty()) {
      this.transferToReverseStack();
    }
    return this.reverseStack.peek();
  }

  isEmpty(): boolean {
    return this.stack.isEmpty() && this.reverseStack.isEmpty();
  }

  private transferToReverseStack(): void {
    while (!this.stack.isEmpty()) {
      this.reverseStack.push(this.stack.pop());
    }
  }
}
