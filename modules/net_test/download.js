// Downloading files.
'use strict';
var http = require('http');
var q = require('q');
var debug = require('debug', 'download');
var fs = require('fs');

function downloadFile(url, fileName) {
    var deferred = q.defer();
    var promise = deferred.promise;

    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
    }

    var chunkN = 0;
    var get = http.get(url, function(res) {
        console.log('Reading data...');
        res.on('data', function(chunk) {
            ++chunkN;
            fs.appendFileSync(fileName, chunk);
        });
        res.on('end', function() {
            if (res.statusCode == 200) {
                deferred.resolve('Done. Number of chunks is ' + chunkN);
            } else {
                deferred.reject(new Error('Error. Status code ' + http.STATUS_CODES[res.statusCode]));
            }
        });
        res.on('error', function(error) {
            deferred.reject(error);
        });
    });

    get.on('error', function(error) {
        deferred.reject(error);
    });
    return promise;
}

console.log('Starting...');
// console.log('Get from "test"');
// downloadFile('test', 'test.html')
//     .then(function(res) {
//         console.log(res);
//     })
//     .catch(function(err) {
//         console.error(err.message);
//     });
console.log('Get from "http://download.thinkbroadband.com/5MB.zip"');
downloadFile('http://download.thinkbroadband.com/5MB.zip', '5MB.zip')
    .then(function(res) {
        console.log(res);
    })
    .catch(function(err) {
        console.error(err.message);
    });