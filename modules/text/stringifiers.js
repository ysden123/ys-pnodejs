// Playing with stringify

var qs = require('querystring');
var t = {
  'a': 'b',
  'c': 'd',
};

console.log('querystring stringify: %s', qs.stringify(t));
console.log('JSON stringify       : %s', JSON.stringify(t));
