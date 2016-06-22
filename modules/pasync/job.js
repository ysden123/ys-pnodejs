'use strict';

exports.job = function(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`job(${i})`);
            resolve();
        }, 100 + Math.random() * 1000);
    });
}
