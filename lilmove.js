const mock = require('mock-fs');
const fs = require('fs');
const readChunk = require('read-chunk');
const fileType = require('file-type');
const fileExtension = require('file-extension');
const _ = require('lodash');

module.exports.listFiles = function(dir = '.') {
    const files = fs.readdirSync(dir);
    const filesByExt = _.groupBy(files, fileExtension);
    console.log(filesByExt);
    return filesByExt;
  };
