const fs = require('fs');
const fileExtension = require('file-extension');
const _ = require('lodash');

module.exports.listFiles = function(dir = '.') {
    const files = fs.readdirSync(dir);
    const filesByExt = _.groupBy(files, fileExtension);
    return filesByExt;
};
