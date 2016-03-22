// Playing with objects
'use strict';

var util = require('util');

var v1 = "the v1's value";
var v2 = "the v2's value";

function f1(o){
    console.log(util.inspect(o));
    console.log(util.inspect(o.v1));
    console.log(util.inspect(o.v2));
}

f1({v1:v1, v2:v2});