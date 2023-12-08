import chai from "chai";
import toString from "../src/toString.js";

const expect = chai.expect;

describe("toString function", () => {
  it("should convert a number to its string representation", () => {
    const result = toString(42);
    expect(result).to.equal("42");
  });

  it("should convert a negative number to its string representation", () => {
    const result = toString(-3.14);
    expect(result).to.equal("-3.14");
  });

  it("should convert a string to itself", () => {
    const result = toString("hello");
    expect(result).to.equal("hello");
  });

  it("should convert a boolean to its string representation", () => {
    const result = toString(true);
    expect(result).to.equal("true");
  });

  it("should convert null to its string representation", () => {
    const result = toString(null);
    expect(result).to.equal("");
  });

  it("should convert undefined to its string representation", () => {
    const result = toString(undefined);
    expect(result).to.equal("");
  });

  it("should convert an array to its string representation", () => {
    const result = toString([1, "two", true]);
    expect(result).to.equal("1,two,true");
  });

  it("should handle nested arrays", () => {
    const result = toString([1, [2, [3]]]);
    expect(result).to.equal("1,2,3");
  });

  it("should convert a symbol to its string representation", () => {
    const result = toString(Symbol("test"));
    expect(result).to.match(/^Symbol\(\w+\)$/);
  });

  it("should handle -0 correctly", () => {
    const result = toString(-0);
    expect(result).to.equal("-0");
  });
});
