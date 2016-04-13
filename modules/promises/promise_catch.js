// Promise with try catch.
'use strict';

function foo() {
    return new Promise((resolve, reject) => {
        throw new Error('The test exception');
    });
}

foo()
    .then(() => console.log('In then 1'))
    .catch((e) => {
        console.log('In promise catch 1:', e);
        throw new Error('The test exception from catch of promise');
    })
    .catch((e) => {
        console.log('In promise catch 2:', e);
    });

foo()
    .then(() => {
        console.log('In then 2');
        throw new Error('The test exception from catch of promise 2');
    })
    .catch((e) => {
        console.log('In promise catch 21:', e);

    });
