'use strict';

const amount = 10000;
// const amount = 353;
// const amount = 1;
const semaphore = require('semaphore')(10);

let counter = 0;
const step = 100;

function job(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ++counter;
            resolve();
        }, 100 + (i % 2) * 250);
    });
}

function execute() {
    return new Promise((resolve, reject) => {
        for (let start = 1; start <= amount; start = start + step) {
            semaphore.take(() => {
                try {
                    let tasks = [];
                    for (let i = start; i <= start + step - 1 && i <= amount; ++i) {
                        tasks.push(job(i));
                    }

                    Promise.all(tasks)
                        .then(() => {
                            try {
                                if (start >= amount - step) {
                                    console.log('resolving');
                                    resolve();
                                }
                                semaphore.leave();
                            }
                            catch (err) {
                                console.error(err);
                                reject(err);
                            }
                        })
                }
                catch (err) {
                    console.error(err);
                    reject(err);
                }
            });
        }
    })
}

console.time('w1');
execute()
    .then(() => { 
        console.log(`Done. counter=${counter}`);
        console.timeEnd('w1');
     })
    .catch(err => console.error(err))