export default interface Queue<T> {
  add(value: T): void;

  remove(): T;

  peek(): T;

  isEmpty(): boolean;
}
