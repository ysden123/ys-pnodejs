'use strict';

const async = require('async');
const job = require('./job');

const items = [];
for (let i = 1; i <= 10; ++i) {
    items.push((callback) => {
        job.job(i)
            .then(() => callback())
            .catch(err => callback(err))
    });
}

function exec() {
    return new Promise((resolve, reject) => {
        async.parallel(items, () => {
            resolve();
        })
    });
}

console.time('exec');
exec()
    .then(() => {
        console.timeEnd('exec');
    })
    .catch(err => console.error(err));
