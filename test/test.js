const expect = require('chai').expect;
const lilMove = require('../litmove');
const mock = require('mock-fs');
const mv = require('mv');
const fs = require('fs');

describe('litmove', function() {

  describe('#listFiles()', function() {
    context('when present', function() {
      it('should return files element', function() {
        mock({
          './a.png': new Buffer([8, 6, 7, 5, 3, 0, 9]),
          './a.txt' : 'fasfasf',
          './b.png': new Buffer([8, 6, 7, 5, 3, 0, 20])
        });

        expect(lilMove.listFiles()).to.deep.equal({
          'png': ['a.png', 'b.png'],
          'txt': ['a.txt']
        });

        mock.restore();
      });
    });
  });

  describe('#move()', function() {
    context('when success', function() {
      it('should return move desc', function() {

        const testResourceDir = './test/resource_test/';
        const moveDesc = {
            'png' : testResourceDir + 'png',
            'txt' : testResourceDir + 'txt'
        };

        expect(lilMove.move(testResourceDir,moveDesc))
          .to
          .deep
          .equal(moveDesc);
      });
    });
  });

  after(function() {
    const testResourceDir = './test/resource_test/';
    mv(testResourceDir + 'png/1.png',
       testResourceDir + '1.png',
       function (err) {});
    mv(testResourceDir + 'png/2.png',
       testResourceDir + '2.png',
       function (err) {});
    mv(testResourceDir + 'txt/1.txt',
          testResourceDir + '1.txt',
          function (err) {});

    fs.rmdirSync(testResourceDir + 'png');
    fs.rmdirSync(testResourceDir + 'txt');
  });

});
