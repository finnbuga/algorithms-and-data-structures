import { assert } from "chai";
import QueueViaStack from "../src/3.4 QueueViaStack";

describe("QueueViaStack", () => {
  it("Should return undefined when removing from an empty queue", () => {
    const q = new QueueViaStack<number>();
    assert.equal(q.remove(), undefined);
  });

  it("Should add two elements and remove one", () => {
    const q = new QueueViaStack<number>();
    q.add(1);
    q.add(2);
    assert.equal(q.remove(), 1);
    assert.equal(q.remove(), 2);
    assert.equal(q.remove(), undefined);
  });
});
