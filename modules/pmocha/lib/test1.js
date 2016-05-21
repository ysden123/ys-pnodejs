'use strict';
function foo1() {
    console.log('==>test1.foo1()');
    // throw new Error('test');
}

module.exports = {
    foo1: foo1
}