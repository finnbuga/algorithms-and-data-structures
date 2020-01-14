import { assert } from "chai";
import MultiSet from "../src/MultiSet";

describe("MultiSet", () => {
  it("Should add, delete and tell the count", () => {
    const multiSet = new MultiSet();
    multiSet.add("1", "2", "1", "3", "a", "aa", "aa");
    multiSet.remove("1", "2");
    assert.equal(multiSet.count("1"), 1);
    assert.equal(multiSet.count("2"), 0);
    assert.equal(multiSet.count("3"), 1);
    assert.equal(multiSet.count("a"), 1);
    assert.equal(multiSet.count("aa"), 2);
    assert.equal(multiSet.count("non existent"), 0);
  });
  it("Should return the unique elements", () => {
    const multiSet = new MultiSet();
    assert.sameMembers(multiSet.uniques(), []);
    multiSet.add("1", "2", "1", "3", "a", "aa", "aa");
    multiSet.remove("1", "2");
    assert.sameMembers(multiSet.uniques(), ["1", "3", "a", "aa"]);
  });
});
