// Tests for number conversions.
'use strict';
console.log(Number('123'));
console.log(Number('123.4'));
console.log(Number('0.123'));
console.log(Number('0.123/3'));
console.log(Number('0.1233')/3);

var r = Number('2') * Number('3');
console.log(r);

console.log('"135"'.replace('"',''));
console.log('"135"'.replace(/"/g,''));
console.log(Number('"135"'.replace('"','')));

r = Number('135') * Number('2.13');
console.log(r);
r = Number('"135"') * Number('"2.13"');
console.log(r);
r = Number('"135"'.replace(/"/g,'')) * Number('"2.13"'.replace(/"/g,''));
console.log(r);