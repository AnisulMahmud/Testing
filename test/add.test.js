import chai from "chai";
const expect = chai.expect;
import chaiHttp from "chai-http";
chai.use(chaiHttp);

import add from "../src/add.js";

describe('add function', () => {

  // Test case 1
  it('should add two positive numbers correctly', () => {
    const result = add(6, 4);
    expect(result).to.equal(10);
  });

  // Test case 2
  it('should add a positive and a negative number correctly', () => {
    const result = add(6, -4);
    expect(result).to.equal(2);
  });

  // Test case 3
  it('should add two negative numbers correctly', () => {
    const result = add(-6, -4);
    expect(result).to.equal(-10);
  });

  // Test case 4
  it('should add two double numbers correctly', () => {
    const result = add(6.4, 4.1);
    expect(result).to.equal(10.5);
  });




});