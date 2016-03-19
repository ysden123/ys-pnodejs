// Playing with node-archiver
'use strict';
var fs = require('fs');
var zip = require('./zip');

// Create a file to zip.
var fileName = 'test.txt';
fs.writeFileSync(fileName, 'The test text for zip/unzip tests.');

zip.zip(fileName, 'test.zip')
    .then(zipFileName => {
        console.log('Result ZIP file name:', zipFileName);
    })
    .catch(err => {
        console.error(err);
    })
