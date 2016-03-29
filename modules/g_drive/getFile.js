// Getting a file from Google Drive
'use strict';
var fs = require('fs');
var fileId = '1uwxKci1KXbdtif-A7Qo2t5PGQyuSgIVBNSv3yo59muk';
var dest = fs.createWriteStream('c:/work/test.csv');
var drive = require('googleapis').drive;

drive.files.get({
   fileId: fileId,
   alt: 'media'
})
.on('end', function() {
  console.log('Done');
})
.on('error', function(err) {
  console.log('Error during download', err);
})
.pipe(dest);