import chai from 'chai';
import chaiHttp from 'chai-http';
import capitalize from '../src/capitalize.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Capitalize function', () => {

  it('should capitalize a string with all lowercase characters', () => {
    const result = capitalize('hello');
    expect(result).to.equal('Hello');
  });

  it('should capitalize a string with all uppercase characters', () => {
    const result = capitalize('WORLD');
    expect(result).to.equal('World');
  });

  it('should capitalize a string with mixed case characters', () => {
    const result = capitalize('mIXeD');
    expect(result).to.equal('Mixed');
  });

 

  it('should capitalize an empty string', () => {
    const result = capitalize('');
    expect(result).to.equal('');
  });

  it('should capitalize a string with leading whitespace', () => {
    const result = capitalize('  capitalize');
    expect(result).to.equal('  capitalize');
  });

  it('should capitalize a string with trailing whitespace', () => {
    const result = capitalize('capitalize  ');
    expect(result).to.equal('Capitalize  ');
  });

 

});