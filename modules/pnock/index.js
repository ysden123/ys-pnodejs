'use strict';

const http = require('http');

function getGoogle() {
    // http.get('http://www.google.com/index.html', (res) => {
    http.get('http://www.google.com', (res) => {
        console.log(`Got response: ${res.statusCode}`);
        // consume response body
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.')
        })
        res.resume();
    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });
}

getGoogle();