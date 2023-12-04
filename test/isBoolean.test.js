import chai from "chai";
const expect = chai.expect;
import chaiHttp from "chai-http";
chai.use(chaiHttp);
import isBoolean from '../src/isBoolean.js'

describe('isBoolean function', () => {

    it('should return true for a boolean true', () => {
        const result = isBoolean(true);
        expect(result).to.be.true;
    });

    it('should return true for a boolean false', () => {
        const result = isBoolean(false);
        expect(result).to.be.true;
    });

    it('should return false for null', () => {
        const result = isBoolean(null);
        expect(result).to.be.false;
    });

    it('should return false for an object', () => {
        const result = isBoolean({});
        expect(result).to.be.false;
    });

    it('should return false for an array', () => {
        const result = isBoolean([]);
        expect(result).to.be.false;
    });

    it('should return false for a number', () => {
        const result = isBoolean(123);
        expect(result).to.be.false;
    });

    it('should return false for a string', () => {
        const result = isBoolean('true');
        expect(result).to.be.false;
    });

});