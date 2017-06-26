var expect = require('chai').expect;
var lilMove = require('../lilmove');
var mock = require('mock-fs');
describe('lilmove', function() {
  before(function() {
    console.log('test');
  });

  describe('#listFiles()', function() {
    context('when present', function() {
      it('should return files element', function() {
        expect(lilMove.listFiles()).to.deep.equal([
          {
            'items': ['a.txt'],
            'type': 'txt'
          },
          {
            'items': ['a.png', 'b.png'],
            'type': 'png'
          }
        ]);
      });
    });
  });
});
