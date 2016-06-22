'use strict';

const async = require('async');
const job = require('./job');

const items = [];
for (let i = 1; i <= 10; ++i) {
    items.push((callback) => {
        job.job(i).then(() => {
            callback();
        })
            .catch(err => {
                console.log('err0', err);
                callback(err);
            })
    });
}

function exec() {
    return new Promise((resolve, reject) => {
        try {
            async.series(items, err => {
                if (err) { reject(err); return; }
                resolve();
            });
        } catch (err) {
            console.log('err1', err);
            reject(err);
        }
    });
}

console.time('exec');
exec()
    .then(() => {
        console.timeEnd('exec');
    })
    .catch(err => console.error(err));
