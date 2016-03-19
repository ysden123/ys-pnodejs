// Playing with ZIP files. The use ADN-ZIP.
'use strict';
var fs = require('fs');
var archiver = require('archiver');

// Create a file to zip.
fs.writeFileSync('test.txt', 'The test text for zip/unzip tests.');

// var inputStream = fs.createReadStream('test.txt');
var archive = archiver.create('zip');

var output = fs.createWriteStream('test.zip')
    .on('close', () => {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });

archive.on('error', (err) => {
    console.error(err);
});

archive.pipe(output);

archive
.append(fs.createReadStream('test.txt'), { name: 'test.txt' })
.finalize();

console.log('Done');
