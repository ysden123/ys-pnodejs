// Skipping exceptions for Promise
'use strict'

function P(throwException) {
    return new Promise((resolve, reject) => {
        if (throwException)
            reject(new Error('error # 1'))
        else
            resolve('success')
    });
}

console.log('(new P(true))');
(new P(true))
    .then(r => console.log({ r: r }))
    .catch(e => console.log('(1)Skip error, continue'))
    .then(() => console.log('(1)Restored chain'))
    .catch(e => console.log({ e: e }))

console.log('(new P(false))');
(new P(false))
    .catch(e => console.log('(2)Skip error, continue'))
    .then(r => console.log({ r: r }))
    .then(() => console.log('(2)Restored chain'))
    .catch(e => console.log({ e: e }))