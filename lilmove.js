const fs = require('fs');
const fileExtension = require('file-extension');
const mv = require('mv');
const _ = require('lodash');


function listFiles(dir = './') {
    const files = fs.readdirSync(dir);
    const filesByExt = _.groupBy(
                          files,
                          fileExtension);
    return filesByExt;
}

module.exports.listFiles = listFiles;

module.exports.move = function(dir = '.', moveDesc) {

  const dirs = listFiles(dir);

  var isError = false;
  _.forEach(moveDesc, function(value, key) {

    const files = dirs[key];

    _.forEach(files, function(x) {

        mv(dir + x,
           value + '/' + x,
           {mkdirp: true},
           function (err) {
             if(err)
              isError = true;
           });
    });
  });

  if(isError) return null;
  return moveDesc;
};
