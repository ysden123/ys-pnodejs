// Using "spread operator"" feature
// !!! Working for NodeJS 6.0.0+
'use strict';

function myFunction(a, b, c) {
    console.log(`a=${a}, b=${b}, c=${c}`);
}

myFunction();

var args = [1, 2, 3];
myFunction(...args);

args = [1, 2];
myFunction(...args);

args = [1, 2];
myFunction(0,...args);
