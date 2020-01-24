const chai = require('chai');
const chaiQuantifiers = require('..');

chai.use(chaiQuantifiers);

const { expect } = chai;

describe('chai-quentifiers', () => {
  describe('containAll', () => {
    it('should be true if all items are true', () => {
      expect([0, 1, 2, 3]).to.containAll((item) => item < 4);
    });

    it('should be false if one item is false', () => {
      expect([0, 1, 2, 3]).to.not.containAll((item) => item >= 3);
    });
  });

  describe('containOne', () => {
    it('should be true if one item is true', () => {
      expect([0, 1, 2, 3]).to.containOne((item) => item === 2);
    });

    it('should be true if two items are true', () => {
      expect([0, 1, 2, 3]).to.containOne((item) => item >= 2);
    });

    it('should be false if no item is true', () => {
      expect([0, 1, 2, 3]).to.not.containOne((item) => item > 3);
    });
  });

  describe('containExactlyOne', () => {
    it('should be true if one item is true', () => {
      expect([0, 1, 2, 3]).to.containExactlyOne((item) => item === 2);
    });

    it('should be false if two items are true', () => {
      expect([0, 1, 2, 3]).to.not.containExactlyOne((item) => item >= 2);
    });

    it('should be false if no item is true', () => {
      expect([0, 1, 2, 3]).to.not.containExactlyOne((item) => item > 3);
    });
  });
});
