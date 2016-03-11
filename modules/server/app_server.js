// HTTP server for tests
var http = require('http');
var qs = require('querystring');
var util = require('util');

var server = http.createServer((req, res) => {
  console.log('request starting');

  /*
    console.dir(req, {
      colors: true
    });
    */

  /*
    console.dir(req.headers, {
      colors: true
    });
    */

  if (req.method == 'POST') {
    var body = '';

    req.on('data', (data) => {
      console.log("on('data'), data: %s", data);
      body += data;
    });

    req.on('end', () => {
      console.log("on('end'), body: %s", body);
      var post_data = qs.parse(body);
      console.dir(post_data, {
        colors: true
      });

      // respond
      res.write(util.inspect(post_data));
      res.end();
    });
  } else {
    // respond
    console.log('respond');
    res.write('Hello client!');
    res.end();
  }
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');
