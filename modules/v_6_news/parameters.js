'use strict';
/**
 * Demonstrates usage of default parameter and "...args"
 *
 * Doesn't work on NodeJs 4.
 *
 * Created by Yuriy Stul on 1/13/2017.
 */
// Default function parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5));   // 5
console.log(multiply(5, 7)); // 35


// Rest parameters
function f(...args){
    console.log(args);
}

f();        // []
f(1);       // [ 1 ]
f(1,2,3);   // [ 1, 2, 3 ]