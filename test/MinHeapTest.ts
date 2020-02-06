import { assert } from "chai";
import MinHeap from "../src/MinHeap";

describe("MinHeap", () => {
  it("Should throw on attmpting to insert undefined, null or NaN values", () => {
    const minHeap = new MinHeap();
    assert.throws(() => minHeap.insert(undefined));
    assert.throws(() => minHeap.insert(null));
    assert.throws(() => minHeap.insert(Number.NaN));
  });

  it("Should return null when extracting from an empty tree", () => {
    const minHeap = new MinHeap();
    assert.equal(minHeap.extractMin(), null);
  });

  it("Should insert random values and extract them in a sorted order", () => {
    const minHeap = new MinHeap();
    minHeap.insert(-3);
    minHeap.insert(55);
    minHeap.insert(1);
    minHeap.insert(4);
    minHeap.insert(0);
    assert.equal(minHeap.extractMin(), -3);
    assert.equal(minHeap.extractMin(), 0);
    assert.equal(minHeap.extractMin(), 1);
    assert.equal(minHeap.extractMin(), 4);
    assert.equal(minHeap.extractMin(), 55);
    assert.equal(minHeap.extractMin(), null);
  });
});
