// Creates ZIP file.
'use strict';
var fs = require('fs');
var archiver = require('archiver');

module.exports.zip = function(fileNameToZip, zipFileName) {
    const promise = new Promise((resolve, reject) => {
        const archive = archiver.create('zip')
            .on('error', (err) => {
                reject(err);
            });

        const output = fs.createWriteStream(zipFileName)
            .on('close', () => {
                console.log(archive.pointer() + ' total bytes');
                console.log('archiver has been finalized and the output file descriptor has closed.');
                resolve(zipFileName);
            });

        archive.pipe(output);

        archive
            .append(fs.createReadStream(fileNameToZip), { name: fileNameToZip })
            .finalize();
    });
    return promise;
}
