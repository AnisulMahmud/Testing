const puppeteer = require('puppeteer');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


import add from '../src/add';

describe('add function', () => {
  it('adds 6 and 4 to equal 10', () => {
    expect(add(6, 4)).to.equal(10);
  });
});

describe('add function', () => {
  it('should add a negative number and zero correctly', () => {
    
    expect(add(-6, 4)).to.equal(-2);
  });
});