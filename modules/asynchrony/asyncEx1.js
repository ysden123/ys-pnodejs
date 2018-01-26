/*
 * Copyright (c) 2018. Yuriy Stul
 */

'use strict';

function handler(i) {
    console.log(`i=${i}`);
}

function process1(i, callback) {
    callback(i)
}

function process2(i, callback) {
    setTimeout(() => callback(i), 0);
}

console.log('Start 1');

for (let i = 1; i <= 10; ++i) {
    process1(i, handler)
}

console.log('finish 1');

console.log('Start 2');

for (let i = 1; i <= 10; ++i) {
    process2(i, handler)
}

console.log('finish 2');