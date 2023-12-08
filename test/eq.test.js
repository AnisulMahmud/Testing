import chai from "chai";
import eq from "../src/eq.js";

const expect = chai.expect;

describe("eq function", () => {
  it("should return true for equal numbers", () => {
    const result = eq(42, 42);
    expect(result).to.be.true;
  });

  it("should return true for equal strings", () => {
    const result = eq("hello", "hello");
    expect(result).to.be.true;
  });

  it("should return true for equal boolean values", () => {
    const result = eq(true, true);
    expect(result).to.be.true;
  });

  it("should return true for equal null values", () => {
    const result = eq(null, null);
    expect(result).to.be.true;
  });

  it("should return true for equal undefined values", () => {
    const result = eq(undefined, undefined);
    expect(result).to.be.true;
  });

  it("should return true for equal objects", () => {
    const obj1 = { key: "value" };
    const obj2 = { key: "value" };
    const result = eq(obj1, obj2);
    expect(result).to.be.true;
  });

  it("should return true for equal arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const result = eq(arr1, arr2);
    expect(result).to.be.true;
  });

  it("should return false for different numbers", () => {
    const result = eq(42, 99);
    expect(result).to.be.false;
  });

  it("should return false for different null and undefined values", () => {
    const result1 = eq(null, undefined);
    const result2 = eq(undefined, null);
    expect(result1).to.be.false;
    expect(result2).to.be.false;
  });

  it("should return false for different objects", () => {
    const obj1 = { key: "value" };
    const obj2 = { key: "differentValue" };
    const result = eq(obj1, obj2);
    expect(result).to.be.false;
  });

  it("should return false for different arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    const result = eq(arr1, arr2);
    expect(result).to.be.false;
  });

  it("should handle NaN values correctly", () => {
    const result = eq(NaN, NaN);
    expect(result).to.be.true;
  });

  it("should handle -0 and 0 correctly", () => {
    const result = eq(-0, 0);
    expect(result).to.be.true;
  });
});
