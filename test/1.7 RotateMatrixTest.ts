import { assert } from "chai";
import RotatingMatrix, { Matrix } from "../src/1.7 RotateMatrix";

describe("rotateMatrix", () => {
  it("should rotate a 0x0 matrix", () => {
    const m = new RotatingMatrix([]);
    const mRotated: Matrix = [];

    assert.deepEqual(m.rotate(), mRotated);
  });

  it("should rotate a 1x1 matrix", () => {
    const m = new RotatingMatrix([[1]]);
    const mRotated: Matrix = [[1]];

    assert.deepEqual(m.rotate(), mRotated);
  });

  it("should rotate a 2x2 matrix", () => {
    const m = new RotatingMatrix([
      [1, 2],
      [3, 4],
    ]);
    const mRotated: Matrix = [
      [3, 1],
      [4, 2],
    ];

    assert.deepEqual(m.rotate(), mRotated);
  });

  it("should rotate a 3x3 matrix", () => {
    const m = new RotatingMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    const mRotated: Matrix = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    assert.deepEqual(m.rotate(), mRotated);
  });
});
