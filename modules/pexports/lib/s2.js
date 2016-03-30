'use strict'
var pexp = require('..');

function foo2(){
    return 's2.foo2';
}
function foo21(){
    return 's2.foo21';
}
function foo22(){
    return pexp.s1.foo1();
}

exports.foo2 = foo2;
exports.foo21 = foo21;
exports.foo22 = foo22;