// Client for testing the server load.
'use strict';
var http = require('http');

function get(n) {
    let promise = new Promise((resolve, reject) => {
        let start = new Date();
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/a' + n
        };
        http.request(options, response => {
            let data = '';
            response
                .on('data', chunk => data += chunk)
                .on('end', () => {
                    let finish = new Date();
                    console.log('a' + n + ' was finished. Duration time is ' + (finish - start) + ' ms');
                    resolve(data);
                });
        }).end();
    });
    return promise;
}

let start = new Date();
console.log('Start');
console.log();
let ids = new Array(3);

for (let i = 1; i <= 3; ++i) {
    ids.push(i);
}

Promise.all(ids.map(get))
    .then(() => {
        let finish = new Date();
        console.log();
        console.log('Finish. Total time is ' + (finish - start) + ' ms');
    });