// Set of functions for testing
'use strict';

exports.f1 = function(data) {
    return data * 2;
}

exports.f2 = function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Inside...');
            resolve('done');
            // reject('error');
        }, 1000);
    });
    return promise;
}