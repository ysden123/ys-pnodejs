/**
 * New Built-In Methods
 *
 * Works on NodeJs 4
 *
 * Created by Yuriy Stul on 2/12/2017.
 */
'use strict';
// New function for finding an element in an array
console.log([ 1, 3, 4, 2 ].find(x => x > 3)); // 4'

// New string repeating functionality.
console.log("*".repeat(4 * 3));
console.log("foo".repeat(3));

// Number Truncation
// Truncate a floating point number to its integral part, completely dropping the fractional part.
console.log(Math.trunc(42.7)); // 42
console.log(Math.trunc( 0.1)); // 0
console.log(Math.trunc(-0.1)); // -0