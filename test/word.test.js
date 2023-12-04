import chai from "chai";
const expect = chai.expect;
import chaiHttp from "chai-http";
chai.use(chaiHttp);

import words from '../src/words.js'

describe('Words function', () => {

    it('should split a string into an array of words by default', () => {
      const result = words('fred, barney, & pebbles');
      expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
    });
  
    it('should split a string into an array of words using a custom pattern', () => {
      const result = words('fred, barney, & pebbles', /[^, ]+/g);
      expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });
  
    it('should handle an empty string', () => {
      const result = words('');
      expect(result).to.deep.equal([]);
    });
  
    it('should handle a string with no words', () => {
        const result = words('123!@#');
        expect(result).to.deep.equal(['123']);
      });
  
    it('should handle a string with special characters', () => {
      const result = words('special !@#$ characters');
      expect(result).to.deep.equal(['special', 'characters']);
    });
  
    it('should handle a string with leading and trailing spaces', () => {
      const result = words('  leading and trailing spaces  ');
      expect(result).to.deep.equal(['leading', 'and', 'trailing', 'spaces']);
    });


    it('should handle a string with no matches for the pattern', () => {
        const result = words('no matches', /pattern/g);
        expect(result).to.deep.equal([]);
    });
  
   
  
  });