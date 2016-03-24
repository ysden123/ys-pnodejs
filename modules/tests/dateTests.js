// Tests with Date
'use strict';
var d = new Date();
console.log(d.getUTCDate());
console.log(d.getUTCMonth() + 1);
console.log(d.getUTCFullYear());
console.log(d);
console.log(d - 1);
d.setDate(d.getDate() -1);
console.log(d);