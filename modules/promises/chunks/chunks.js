// Usage promises with chunks.

'use strict';

let amount = 10;
const semaphore = require('semaphore')(4);

function job(i) {
    console.log(`job(${i})`);
    console.log(`semaphore.current = ${semaphore.current}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, (amount - i) * 250);
    });
}

function exec() {

    return new Promise((resolve, reject) => {
        let counter = 0;
        for (let i = 0; i < amount; ++i) {
            semaphore.take(() => {
                job(i)
                    .then(() => {
                        semaphore.leave();
                        if (++counter == amount) {
                            resolve();
                        }
                    });
            });
        }
    })
}


exec()
    .then(() => console.log('done'));