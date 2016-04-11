// Playing with socket, server
'use strict';
const net = require('net');

const server = net.createServer((c) => {
    // 'connection' listener
    const start = new Date();
    console.log('client connected');
    c.on('end', () => {
        const end = new Date();
        console.log(`client disconnected, duration is ${end - start} ms`);
    });
    longProcess().then(() => {
        c.write('hello\r\n');
        c.pipe(c);
    });
});

server.on('error', (err) => {
    throw err;
});

server.listen(3000, () => {
    console.log('server bound (port 3000)');
});

function longProcess() {
    const promise = new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve();
        // }, 1000);
        for (let j = 1; j <= 1000; ++j) {
            for (let i = 1; i <= 1000000; ++i) {
                Math.sqrt(i);
            }
        }
        resolve();
    });
    return promise;
}