import { assert } from "chai";
import BitMap from "../src/BitMap";

describe("BitMap", () => {
  it("Should set", () => {
    const bitMap = new BitMap(10);
    bitMap.set(0);
    bitMap.set(4);
    bitMap.set(8);
    assert.isTrue(bitMap.isSet(0));
    assert.isFalse(bitMap.isSet(1));
    assert.isFalse(bitMap.isSet(2));
    assert.isFalse(bitMap.isSet(3));
    assert.isTrue(bitMap.isSet(4));
    assert.isFalse(bitMap.isSet(5));
    assert.isFalse(bitMap.isSet(6));
    assert.isFalse(bitMap.isSet(7));
    assert.isTrue(bitMap.isSet(8));
    assert.isFalse(bitMap.isSet(9));
  });
  it("Should unset", () => {
    const bitMap = new BitMap(10);
    bitMap.unset(0);
    bitMap.set(0);
    bitMap.set(4);
    bitMap.unset(0);
    bitMap.unset(8);
    assert.isFalse(bitMap.isSet(0));
    assert.isFalse(bitMap.isSet(1));
    assert.isFalse(bitMap.isSet(2));
    assert.isFalse(bitMap.isSet(3));
    assert.isTrue(bitMap.isSet(4));
    assert.isFalse(bitMap.isSet(5));
    assert.isFalse(bitMap.isSet(6));
    assert.isFalse(bitMap.isSet(7));
    assert.isFalse(bitMap.isSet(8));
    assert.isFalse(bitMap.isSet(9));
  });
});
