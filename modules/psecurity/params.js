'use strict';
/**
 * How to check request parameters.
 * Created by Yuriy Stul on 11/9/2016.
 */

var t1 = {i: 1, a: ["aa", "bb"]};
if (t1.a)
    console.log("t1.a is defined");
if (t1.a == 'all')
    console.log("t1.a == 'all' is true");
else
    console.log("t1.a == 'all' is false");

// ERROR: t1.a is not string
// console.log(t1.a.toUpperCase());
console.log(typeof  t1.a);
console.log(typeof  t1.a[0]);