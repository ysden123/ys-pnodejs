'use strict';

const http = require('http');

function getGoogle(callback) {
    http.get('http://www.google.com', (res) => {
        // consume response body
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (chunk) => {
            body +=chunk;
        });
        res.on('end', () => {
            callback({ statusCode: res.statusCode, headers: res.headers, body: body });
            return;
        })
        res.resume();
    }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
    });
}

getGoogle((r) => {
    console.log({ r_statusCode: r.statusCode, r_headers: r.headers, r_body: r.body });
});

module.exports={
    getGoogle:getGoogle
}