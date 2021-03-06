// Promise with try catch.
'use strict';

function foo() {
    return new Promise(() => {
        throw new Error('The test exception');
    });
}

function foo2() {
    return new Promise((resolve) => {
        resolve();
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
    })
    .then(() => console.log('In then 11'));

foo()
    .then(() => {
        console.log('In then 2');
        throw new Error('The test exception from catch of promise 2');
    })
    .catch((e) => {
        console.log('In promise catch 21:', e);
    })
    .then(() => console.log('In then 21'));

foo2()
    .then(() => console.log('In then 201'))
    .catch(() => console.log('In catch 202'))
    .then(() => console.log('In then 203'));
