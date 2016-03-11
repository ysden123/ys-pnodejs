// HTTP server for tests
var http = require('http');

var server = http.createServer((req, res) => {
  console.log('request starting');

  /*
    console.dir(req, {
      colors: true
    });
    */

  console.dir(req.headers, {
    colors: true
  });

  console.log(req.headers);

  // respond
  console.log('respond');
  res.write('Hello client!');
  res.end();
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');
