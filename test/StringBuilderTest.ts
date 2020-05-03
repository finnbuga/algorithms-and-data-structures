import { assert } from "chai";
import StringBuilder from "../src/StringBuilder";

describe("StringBuilder", () => {
  it("Should initialise with empty string by default", () => {
    const s = new StringBuilder();
    assert.equal(s.getStr(), "");
  });

  it("Should initialise correctly", () => {
    const str = "random string";
    const s = new StringBuilder(str);
    assert.equal(s.getStr(), str);
  });

  it("Should append strings", () => {
    const str1 = "Some";
    const str2 = "Text";
    const str3 = "Here";
    const s = new StringBuilder(str1);
    s.append(str2, str3);
    assert.equal(s.getStr(), str1 + str2 + str3);
  });
});
