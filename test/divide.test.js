import chai from "chai";
import divide from "../src/divide.js";

const expect = chai.expect;

describe("divide function", () => {
  it("should divide two positive numbers", () => {
    const result = divide(10, 2);
    expect(result).to.equal(5);
  });

  it("should divide a negative dividend by a positive divisor", () => {
    const result = divide(-8, 4);
    expect(result).to.equal(-2);
  });

  it("should handle floating-point numbers", () => {
    const result = divide(3.14, 2);
    expect(result).to.be.closeTo(1.57, 0.01);
  });
});
