import { assert } from "chai";
import QueueViaList from "../src/QueueViaList";

describe("QueueViaList", () => {
  it("Should return null when removing from an empty queue", () => {
    const q = new QueueViaList<number>();
    assert.equal(q.remove(), null);
  });

  it("Should peek", () => {
    const q = new QueueViaList<number>();
    q.add(1);
    q.add(2);
    q.add(3);
    assert.equal(q.peek(), 1);
  });

  it("Should add two elements and remove one", () => {
    const q = new QueueViaList<number>();
    q.add(1);
    q.add(2);
    assert.equal(q.remove(), 1);
    assert.equal(q.remove(), 2);
    assert.equal(q.remove(), null);
  });
});
