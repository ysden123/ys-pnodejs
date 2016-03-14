// Main for testing multiple API use.

'use strict';

var api1 = require('./api1');
var api2 = require('./api2');

api1.f1('the test');
api1.f2();
api1.f3('string 1', 'string 2');
api1.f3({a1: 'sss1', b1: 'bbbbsss2'}, {v2:'vvv2222', d4:'bbbb4'});

api2.f21('the test 2');
api2.f22();
api2.f23('string 21', 'string 22');
api2.f23({a1: 'sss21', b1: 'bbbbsss22'}, {v2:'vv2v2222', d4:'bb2bb4', c2: 123.43});
