import { assert } from "chai";
import rotateMatrix from "../src/1.7 RotateMatrix";

describe("rotateMatrix", () => {
  it("should rotate a 0x0 matrix", () => {
    const m: Array<Array<any>> = [];
    const mRotated: Array<Array<any>> = [];

    rotateMatrix(m);
    assert.deepEqual(m, mRotated);
  });

  it("should rotate a 1x1 matrix", () => {
    const m: Array<Array<any>> = [[1]];
    const mRotated: Array<Array<any>> = [[1]];

    rotateMatrix(m);
    assert.deepEqual(m, mRotated);
  });

  it("should rotate a 2x2 matrix", () => {
    const m: Array<Array<any>> = [
      [1, 2],
      [3, 4]
    ];
    const mRotated: Array<Array<any>> = [
      [3, 1],
      [4, 2]
    ];

    rotateMatrix(m);
    assert.deepEqual(m, mRotated);
  });

  it("should rotate a 3x3 matrix", () => {
    const m: Array<Array<any>> = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const mRotated: Array<Array<any>> = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ];

    rotateMatrix(m);
    assert.deepEqual(m, mRotated);
  });
});
