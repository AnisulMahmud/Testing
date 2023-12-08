import chai from "chai";
import toInteger from "../src/toInteger.js";

const expect = chai.expect;

describe("toInteger function", () => {
  it("should convert a positive float to integer", () => {
    const result = toInteger(3.14);
    expect(result).to.equal(3);
  });

  it("should convert a negative float to integer", () => {
    const result = toInteger(-2.718);
    expect(result).to.equal(-2);
  });

  it("should handle zero value", () => {
    const result = toInteger(0);
    expect(result).to.equal(0);
  });

  it("should convert a positive integer to itself", () => {
    const result = toInteger(42);
    expect(result).to.equal(42);
  });

  it("should convert a negative integer to itself", () => {
    const result = toInteger(-123);
    expect(result).to.equal(-123);
  });

  it("should convert a string representing a positive float to integer", () => {
    const result = toInteger("7.89");
    expect(result).to.equal(7);
  });

  it("should convert a string representing a negative float to integer", () => {
    const result = toInteger("-45.67");
    expect(result).to.equal(-45);
  });

  it("should convert a string representing a positive integer to integer", () => {
    const result = toInteger("123");
    expect(result).to.equal(123);
  });

  it("should convert a string representing a negative integer to integer", () => {
    const result = toInteger("-789");
    expect(result).to.equal(-789);
  });

  it("should handle NaN by returning 0", () => {
    const result = toInteger(NaN);
    expect(result).to.equal(0);
  });
});
