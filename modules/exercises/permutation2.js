/*
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';

function permute(input) {
    let permArr = [],
        usedElements = [];

    function makePermute(input) {
        let i, element;
        for (i = 0; i < input.length; i++) {
            element = input.splice(i, 1)[0];
            usedElements.push(element);
            if (input.length === 0) {
                permArr.push(usedElements.slice());
            }
            makePermute(input);
            input.splice(i, 0, element);
            usedElements.pop();
        }
        return permArr
    }

    return makePermute(input);
}

console.log(permute([1, 2, 3]));
console.log(permute('abc'.split('')));
