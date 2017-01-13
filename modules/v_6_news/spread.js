// Using "spread operator"" feature
// !!! Working for NodeJS 6.0.0+
'use strict';

// before the spread operator
function myFunctionBeforeSpread(a,b,c) {
    console.log(`a=${a}, b=${b}, c=${c}`);
}
let args = [0, 1, 2];
myFunctionBeforeSpread.apply(null, args);   // a=0, b=1, c=2

function myFunction(a, b, c) {
    console.log(`a=${a}, b=${b}, c=${c}`);
}

myFunction();           // a=undefined, b=undefined, c=undefined

args = [1, 2, 3];
myFunction(...args);    // a=1, b=2, c=3

args = [1, 2];
myFunction(...args);    // a=1, b=2, c=undefined

args = [1, 2];
myFunction(0,...args);  // a=0, b=1, c=2





