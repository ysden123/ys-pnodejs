// Playing with console log

'use strict';

var ob1 = {
  a: 'the a',
  b: 1,
  c: true
};

var ob2 = {
  a: 'the b',
  b: 12.3,
  c: false
};

console.log(ob1, ob2);                      // With inspect
console.log('ob1: ', ob1, 'ob2: ',  ob2);   // With inspect
console.log('ob1: %s, ob2: %s', ob1, ob2);  // Without inspect
console.log(`ob1: ${ob1}, ob2: ${ob2}`);    // Without inspect
