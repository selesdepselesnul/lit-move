var expect = require('chai').expect;
var lilMove = require('../lilmove');
var mock = require('mock-fs');


describe('lilmove', function() {
  before(function() {
    mock({
      './a.png': new Buffer([8, 6, 7, 5, 3, 0, 9]),
      './a.txt' : 'fasfasf',
      './b.png': new Buffer([8, 6, 7, 5, 3, 0, 20])
    });
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
