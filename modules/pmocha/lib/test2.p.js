'use strict';

exports.test2 = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 500);
    })
}