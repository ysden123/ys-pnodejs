// Using "spread operator"" feature
// !!! Working for NodeJS 6.0.0+
'use strict';

// before the spread operator
function myFunctionBeforeSpread(a,b,c) {
    console.log(`a=${a}, b=${b}, c=${c}`);
}
let args = [0, 1, 2];
myFunctionBeforeSpread.apply(null, args);   // a=0, b=1, c=2

function myFunctionAfterSpread(a, b, c) {
    console.log(`a=${a}, b=${b}, c=${c}`);
}

myFunctionAfterSpread();           // a=undefined, b=undefined, c=undefined

args = [1, 2, 3];
myFunctionAfterSpread(...args);    // a=1, b=2, c=3

args = [1, 2];
myFunctionAfterSpread(...args);    // a=1, b=2, c=undefined

args = [1, 2];
myFunctionAfterSpread(0,...args);  // a=0, b=1, c=2





