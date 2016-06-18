'use strict';
const lp = require('lazy-promise');
const semaphore = require('semaphore')(1);

function job(i) {
    return lp((resolve, reject) => {
        semaphore.take(() => {
            console.log(`Initialize ${i}th job`);
            setTimeout(() => {
                console.log(`i=${i}`);
                semaphore.leave();
                resolve();
                // }, 100 + (i % 2) * 250);
            }, 100 + Math.random() * 1000);
        })
    })
}

function execute() {
    return new Promise((resolve, reject) => {
        let jobs = [];
        console.log('Fill jobs');
        for (var index = 0; index < 10; index++) {
            jobs.push(job(index));
        }
        console.log('Run all jobs');
        Promise.all(jobs).then(() => {
            console.log('All done');
            resolve();
        })
    })
}

console.log('Start')
execute()
    .then(() => console.log('Finish'));