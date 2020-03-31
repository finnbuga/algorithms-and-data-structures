import { assert } from "chai";
import Stack from "../src/Stack";

describe("Stack", () => {
  it("Should push two values and pop them in order", () => {
    const s = new Stack<number>();
    s.push(1);
    s.push(2);
    assert.equal(s.pop(), 2);
    assert.equal(s.pop(), 1);
    assert.equal(s.pop(), undefined);
  });

  it("Should pop undefined if empty", () => {
    const s = new Stack<number>();
    assert.equal(s.pop(), undefined);
  });

  it("Should know when it's empty", () => {
    const s = new Stack<number>();
    assert.isTrue(s.isEmpty());
  });
});
