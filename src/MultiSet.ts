/**
 * A Multi Set is a set that contains the same element multiple times
 * The implementation bellow stores the elements and their multiplicity
 * in a hash table. JS Objects are hash tables, so use that.
 */
export default class MultiSet {
  private elmCount: Object = {};

  private _size: number = 0;

  constructor(...elements: string[]) {
    this.add(...elements);
  }

  get size(): number {
    return this._size;
  }

  count(element: string): number {
    return this.elmCount[element] !== undefined ? this.elmCount[element] : 0;
  }

  add(...elements: string[]): void {
    for (const element of elements) {
      this.elmCount[element] =
        this.elmCount[element] !== undefined ? this.elmCount[element] + 1 : 1;
      this._size++;
    }
  }

  remove(...elements: string[]): void {
    for (const element of elements) {
      if (this.elmCount[element] !== undefined) {
        this.elmCount[element]--;
        if (this.elmCount[element] === 0) {
          delete this.elmCount[element];
        }
        this._size--;
      }
    }
  }

  uniques(): string[] {
    return Object.keys(this.elmCount);
  }
}
