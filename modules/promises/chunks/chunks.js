// Usage promises with chunks.

'use strict';

function job(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`job(${i})`);
            resolve();
        }, 500);
    });
}

let chunkStep = 3;
let amount = 10;

function exec() {
    return new Promise((resolve, reject) => {
        for (let iChunk = 0; iChunk < amount; iChunk = iChunk + chunkStep) {
            let jobs = [];
            for (let i = iChunk; i < (iChunk + chunkStep) && i < amount; ++i) {
                jobs.push(job(i));
            }
            Promise.all(jobs)
                .then(() => resolve());
        }
    })
}


exec()
    .then(() => console.log('done'));