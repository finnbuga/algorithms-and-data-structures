export default class Stack<T> {
  s: Array<T> = [];

  push(value: T): void {
    this.s.push(value);
  }

  pop(): T | undefined {
    return this.s.pop();
  }

  peek(): T | undefined {
    return this.s[this.s.length - 1];
  }

  isEmpty(): boolean {
    return this.s.length === 0;
  }
}
