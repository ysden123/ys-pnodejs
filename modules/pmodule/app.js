// Playing with module and exports
'use strict';
var m1 = require('./m1');
var M2 = require('./m2');

var r1 = m1.f1(1);
var r2 = m1.f2(1);
console.log('r1:', r1, ', r2:', r2);

var coeff = 6;
var m2 = new M2(coeff);
var r1 = m2.f1(1);
var r2 = m2.f2(1);
console.log('r1:', r1, ', r2:', r2);
