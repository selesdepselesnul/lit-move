const mock = require('mock-fs');
const fs = require('fs');
const readChunk = require('read-chunk');
const fileType = require('file-type');
// 
// const buffer = readChunk.sync('unicorn.png', 0, 4100);
// const fileMeta = fileType(buffer);

module.exports.listFiles = function(dir = '.') {
    const files = fs.readdirSync(dir);
    console.log(files);
    return [
      {
        'items': ['a.txt'],
        'type': 'txt'
      },
      {
        'items': ['a.png', 'b.png'],
        'type': 'png'
      }
    ];
  };
