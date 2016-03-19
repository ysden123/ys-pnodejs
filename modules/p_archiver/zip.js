// Creates ZIP file.
'use strict';
var q = require('q');
var fs = require('fs');
var archiver = require('archiver');

function zip(fileNameToZip, zipFileName) {
    var deferred = q.defer();
    var promise = deferred.promise;

    var archive = archiver.create('zip')
        .on('error', (err) => {
            deferred.reject(err);
        });
    var output = fs.createWriteStream(zipFileName)
        .on('close', () => {
            console.log(archive.pointer() + ' total bytes');
            console.log('archiver has been finalized and the output file descriptor has closed.');
            deferred.resolve(zipFileName);
        })

    archive.pipe(output);

    archive
        .append(fs.createReadStream(fileNameToZip), { name: fileNameToZip })
        .finalize();

    return promise;
}

function unzip(fileNameToUnzip, zipFileName) {
    var deferred = q.defer();
    var promise = deferred.promise;

    var archive = archiver.create('zip')
        .on('error', (err) => {
            deferred.reject(err);
        });
        
        var input = fs.createReadStream(zipFileName);
        

    return promise;
}


module.exports = {
    zip: zip,
    unzip: unzip
};
