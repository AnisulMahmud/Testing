import chai from "chai";
const expect = chai.expect;
import chaiHttp from "chai-http";
chai.use(chaiHttp);

import isLength from '../src/isLength.js'

describe('isLength Function', () => {

    it('should return true for a valid positive integer', () => {
        const result = isLength(3);
        expect(result).to.be.true;
    });

    it('should return false for Number.MIN_VALUE', () => {
        const result = isLength(Number.MIN_VALUE);
        expect(result).to.be.false;
    });

    it('should return false for Infinity', () => {
        const result = isLength(Infinity);
        expect(result).to.be.false;
    });

    it('should return false for a string', () => {
        const result = isLength('3');
        expect(result).to.be.false;
    });

    it('should return false for a negative number', () => {
        const result = isLength(-1);
        expect(result).to.be.false;
    });

    it('should return false for a floating-point number', () => {
        const result = isLength(3.14);
        expect(result).to.be.false;
    });



});