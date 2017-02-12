'use strict';
/**
 * Created by Yuriy Stul on 2/12/2017.
 *
 * Demonstrates shorter syntax for common object property definition idiom.
 *
 * Works on NodeJs 4
 */
const x = 1;
const y = 'text';
let obj1 = {x, y};
console.log({obj1: obj1});
console.log(obj1);

// Computed property name
function getPropertyName() {
    return "123"
}

let obj2 = {
    foo: 'bar',
    ['baz' + getPropertyName()]: 13
};
console.log({obj2: obj2});

// Computed method names
function getMethodName() {
    return 'theMethod123'
}

let obj3 = {
    foo(a, b){
        //...
    },
    bar(x, y){
        // ...
    },
    ['m' + '3']: function () {
        console.log('==>m3');
    },
    [getMethodName()]: function (x, y) {
        console.log(`==>${getMethodName()}: x = ${x}, y = ${y}`);
    }
};

obj3.bar(15, 16);
console.log({obj3: obj3});
// console.log(`obj3.theMethod123: ${obj3.theMethod123(13, 15)}`);
obj3.m3();
obj3.theMethod123(13, 17);