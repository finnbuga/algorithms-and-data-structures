import { assert } from "chai";
import sortSlice from "../src/mergeSort";
import quickSort from "../src/quickSort";

[sortSlice, quickSort].forEach((sort) => {
  describe(sort.name, () => {
    it("Should sort a random array", () => {
      const a = [4, 6, 2, 8, 9, 5];
      assert.deepEqual(sort(a), [2, 4, 5, 6, 8, 9]);
    });
    it("Should work on en empty array", () => {
      const a = [];
      assert.deepEqual(sort(a), []);
    });
    it("Should sort a reversly sorted array", () => {
      const a = [6, 4, 3, 2, 1, 0];
      assert.deepEqual(sort(a), [0, 1, 2, 3, 4, 6]);
    });
    it("Should sort negative numbers", () => {
      const a = [-6, 4, 3, 2, 1, 0];
      assert.deepEqual(sort(a), [-6, 0, 1, 2, 3, 4]);
    });
  });
});
