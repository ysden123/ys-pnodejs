// Create ZIP file.
'use strict';
var fs = require('fs');
var archiver = require('archiver');

function zip(srcFile, zipFile) {
    let promise = new Promise((resolve, reject) => {
        let output = fs.createWriteStream(zipFile)
            .on('close', () => {
                resolve();
            });

        let archive = archiver.create('zip');
        archive.on('error', (err) => reject(err));
        archive.pipe(output);

        archive
            .append(fs.createReadStream(srcFile), { name: 'test.txt' })
            .finalize();
        resolve();
    });
    return promise;
}

zip('test.txt', 'test.zip')
    .then(() => console.log('Done!'))
    .catch(e => console.error(e));