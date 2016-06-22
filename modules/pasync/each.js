'use strict';

// Include the async package 
// Make sure you add "async" to your package.json 
const async = require('async');
const job = require('./job');

const items = [];
for (let i = 1; i <= 10; ++i) {
    items.push(job.job(i));
}

function exec() {
    return new Promise((resolve, reject) => {
        // 1st para in async.each() is the array of items 
        async.each(items,
            // 2nd param is the function that each item is passed to 
            function(item, callback) {
                item()
                    .then(() => {
                        callback();
                    })
                    .catch(err => call(err));
            },
            function(err) {
                // All tasks are done now 
                resolve();
            }
        );
    });
}

console.time('exec');
exec().then(() => {
    console.timeEnd('exec');
});
