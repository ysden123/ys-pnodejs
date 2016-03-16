/*
Playing with closures
*/
'use strict';

function localise(greeting) {
    // closure
    return function(name) {
        console.log(greeting + ' ' + name);
    };
}

var english = localise('Hello');
var russian = localise('Hello russian');

english('closure');     //==> Hello closure
russian(' closure');    //==> Hello russian closure

function counter(n) {
    let count = n;
    // closure
    return () => {
        console.log(count++);
    }
}

// Keeping state (variable 'count'), v1.
// The function counter is calling one time, but closure is callig each time! 
var ct = counter(5);
ct();   //==> 5
ct();   //==> 6
ct();   //==> 7
ct();   //==> 8

console.log();

var outerVar = 4;
var handle;
function outer() {
    let innerVar = 5;
    function inner() {
        console.log(outerVar);
        console.log(innerVar);
    };
    handle = inner;
}
outer();
handle();
// If to call handle() before outer() then will be the error - handle is not defined yet.

console.log();

// Function factory
function createFunction(n) {
    return (x) => {
        return x * n;
    }
}
var twice = createFunction(2);
var threeTimes = createFunction(3);
console.log(`${twice(3)} ${threeTimes(4)}`);    //==> 6 12

console.log();

// Keeping state (variable 'count'), v2.
var ct2 = (() => {
    let count = 5;
    return () => {
        console.log(count++);
    };
})();
ct2();  //==> 5
ct2();  //==> 6
ct2();  //==> 7
ct2();  //==> 8
