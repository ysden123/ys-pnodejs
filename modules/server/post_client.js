// Sends POST request to HTTP server

var http = require('http');
var qs = require('querystring');

function postWithWriteEachParam() {
  console.log('==> postWithWriteEachParam');
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

  var req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
//    console.log('headers: ${JSON.stringify(res.headers)}');
    console.log('headers: ${qs.stringify(res.headers)}');

    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });

    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.log(`Problem with request: ${e.message}`);
  });

  req.write('param1=' + 'value 1');
  req.write('&param2=' + 'value 2');
  req.end();
}

function postWithPostData() {
  console.log('==> postWithPostData');

  var postData = qs.stringify({
    'param21': 'value 21',
    'param22': 'value 22',
  });
  var options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  var req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log('headers: ${qs.stringify(res.headers)}');

    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });

    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.log(`Problem with request: ${e.message}`);
  });

  req.write(postData);
  req.end();
}

postWithWriteEachParam();

postWithPostData();
