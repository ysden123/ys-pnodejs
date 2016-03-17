// Prototype for polling with promise using Q
'use strict';

var q = require('q');

function poll(times) {
    console.log('Create promise.');
    var deferred = q.defer();
    var promise = deferred.promise;

    setTimeout(handler, 1000, 1);

    function handler(time) {
        console.log('Processing ... time:', time);
        if (time == times) {
            console.log('resolving...');
            deferred.resolve('Done!');
        } else {
            setTimeout(handler, 1000, time + 1);
        }
    }

    console.log('Returning promise.');
    return promise;
}

console.log("Starting ...");
try {
    poll(3)
        .then(function(result) {
            console.log('result:', result);
        })
        .catch(function(error) {
            console.error('error:', error);
        });
}
catch (e) {
    console.error(e);
}
console.log('Finish.');