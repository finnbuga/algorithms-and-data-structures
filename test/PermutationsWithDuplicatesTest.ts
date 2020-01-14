import { assert } from "chai";
import getPerms from "../src/PermutationsWithDuplicates";

describe("getPermutations", () => {
  it("Should find permutations for duplicate characters", () => {
    assert.sameMembers(getPerms("1122"), [
      "1122",
      "1212",
      "1221",
      "2112",
      "2121",
      "2211"
    ]);
  });
  it("Should return [''] for an empty string", () => {
    assert.sameMembers(getPerms(""), [""]);
  });
});
