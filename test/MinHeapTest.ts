import { assert } from "chai";
import MinHeap from "../src/MinHeap";

describe("MinHeap", () => {
  describe("insert()", () => {
    it("Should insert and bubble up small values", () => {
      const minHeap = new MinHeap();
      minHeap.insert(3);
      minHeap.insert(5);
      minHeap.insert(1);
      minHeap.insert(4);
      minHeap.insert(0);
      assert.deepEqual(minHeap.getValues(), [0, 1, 3, 5, 4]);
    });
  });

  describe("extractMin()", () => {
    it("Should work with a 1 node tree", () => {
      const minHeap = new MinHeap();
      minHeap.insert(3);
      assert.equal(minHeap.extractMin(), 3);
      assert.deepEqual(minHeap.getValues(), []);
    });

    it("Should extract null in an empty tree", () => {
      const minHeap = new MinHeap();
      assert.equal(minHeap.extractMin(), null);
      assert.deepEqual(minHeap.getValues(), []);
    });

    it("Should extract and bubble down big values", () => {
      const minHeap = new MinHeap();
      minHeap.insert(3);
      minHeap.insert(5);
      minHeap.insert(1);
      minHeap.insert(4);
      minHeap.insert(0);
      minHeap.insert(9);
      assert.equal(minHeap.extractMin(), 0);
      assert.deepEqual(minHeap.getValues(), [1, 4, 3, 5, 9]);
    });
  });
});
