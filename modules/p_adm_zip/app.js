// Playing with ZIP files. The use ADN-ZIP.
'use strict';
var fs = require('fs');
var AdmZip = require('adm-zip');

// Create a file to zip.
fs.writeFileSync('test.txt', 'The test text for zip/unzip tests.');

// Create zip file.
var zip = new AdmZip();
// add local file
// zip.addLocalFile(/*local path*/'test.txt', /*zip path*/null, /*zipname*/'zip_name.txt');
// zip.addLocalFile(/*local path*/'test.txt');
zip.addFile("test22.txt", new Buffer("inner content of the file"), "entry comment goes here");
	// add local file 
// Write to disk
zip.writeZip('test.zip');

console.log('Done');
