// HTTP server for tests
'use strict';
var http = require('http');
var qs = require('querystring');
var util = require('util');
var fs = require('fs');
var path = require('path');

var server = http.createServer((req, res) => {
    console.log('request starting');

    // console.dir(req, {
    //   colors: true
    // });

    console.log({ url: req.url });
    switch (req.url) {
        case '/a1':
            handleA1(res);
            break;
        case '/a2':
            handleA2(res);
            break;
        case '/a3':
            handleA3(res);
            break;
        default:
            let readStream = fs.createReadStream(path.join(__dirname, 'index.html'));
            readStream.on('open', () => {
                readStream.pipe(res);
            });
    }
});

function handleA1(res) {
    let start = new Date();
    longProcess(1, res).then(() => {
    });
}

function handleA2(res) {
    let start = new Date();
    longProcess(2, res).then(() => {
    });
}

function handleA3(res) {
    let start = new Date();
    longProcess(3, res).then(() => {
    });
}

function longProcess(n, res) {
    let promise = new Promise((resolve, reject) => {
        console.log('Handling a' + n);
        let start = new Date();
        let count = 0;
        let io = setInterval(() => {
            if (++count > 10) {
                clearInterval(io);
                let end = new Date();
                let duration = (end - start);
                
                res.write('<html><body>');
                res.write('Handled a' + n + '</br>');
                res.write('Started: ' + start + '</br>');
                res.write('Finished: ' + end + '</br>');
                res.write(' Duration is ' + duration + ' msec.</br>');
                res.write('</body></html>');
                res.end();
                
                console.log('Handled a' + n);
                resolve();
            } else {
                for (let i = 1; i <= 1000; ++i) {
                    fs.writeFileSync('d:/work/test' + n + '.txt', fs.readFileSync(path.join(__dirname, 'index.html')));
                }
            }
        }, 1000);
    });
    return promise;

}

server.listen(3000);
console.log('Server running at http://localhost:3000/');
