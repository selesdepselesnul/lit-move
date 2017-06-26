var expect = require('chai').expect;
describe('Array', function() {
  before(function() {
    console.log('test');
  });

  describe('#indexOf()', function() {
    context('when present', function() {
      it('should return the index where the element first appears in the array', function() {
        expect(2).to.equal(2);
      });
    });
  });
});
