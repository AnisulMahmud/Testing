import chai from "chai";
import camelCase from "../src/camelCase.js";

const expect = chai.expect;

describe("camelCase function", () => {
  it("should convert a simple string to camelCase", () => {
    const result = camelCase("hello world");
    expect(result).to.equal("helloWorld");
  });
  it("should remain same for a camelCase string", () => {
    const result = camelCase("camelCase");
    expect(result).to.equal("camelCase");
  });
});



