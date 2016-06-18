// Run without exception: node testsemaphore.js
// Run with exception: node testsemaphore.js true
'use strict';
const lp = require('lazy-promise');
const semaphore = require('semaphore')(1);

let counter = 0;

function work(i) {
    return new Promise((resolve, reject) => {
        console.log(`Initialize ${i}th job`);
        setTimeout(() => {
            console.log(`i=${i}`);
            if (process.argv[2]==='true')
            {
                if (counter == 3) {
                    console.log('Throw Error');
                    return reject(new Error('test'));
                }}
            ++counter;
            resolve();
        }, 100 + Math.random() * 1000);
    })
}

function job(i) {
    return lp((resolve, reject) => {
        semaphore.take(() => {
            work(i)
                .then(() => {
                    semaphore.leave();
                    resolve();
                })
                .catch(err => reject(err));
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
        Promise.all(jobs)
            .then(() => {
                console.log('All done');
                resolve();
            })
            .catch(err => reject(err));
    })
}

console.log('Start')
execute()
    .then(() => console.log('Finish'))
    .catch(err => {
        console.error('Error F: ' + err);
     });