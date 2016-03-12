// Promise use in post data
'use strict'
var http = require('http');
var qs = require('querystring');

function post(options, data) {
  let p = new Promise((resolve, reject) => {
    let req = http.request(options, (res) => {
      res.setEncoding('utf8');

      var result = '';
      res.on('data', function onData(chunk) {
        result += chunk;
      });

      res.on('end', function onEnd() {
        resolve(result);
      });
    });

    req.on('error', function onError(e) {
      reject(e.message);
    });

    req.write(data);
    req.end();
  });

  return p;
}

var options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }
};

var data = qs.stringify({
  'param21': 'value 21',
  'param22': 'value 22',
});

console.log('Attempt 1');
post(options, data)
  .then(
    response => console.log(`Result: %s`, JSON.stringify(response)),
    error => console.log(`Error: %s`, JSON.stringify(error))
  );

console.log('Attempt 2');
post(options, data)
  .then(response => console.log(`Result: %s`, JSON.stringify(response)))
  .catch(error => console.log(`Error: %s`, JSON.stringify(error)));
