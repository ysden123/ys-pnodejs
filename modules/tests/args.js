// Tests for function args.
'use strict';
function f1(a1, a2){
    console.log('==>f1');
    console.log(a2);
    var c1 = a2 == undefined;
    console.log('a2:', a2, 'c1:', c1);
}

f1(1);
f1(1, 2);