/*
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';

let permArr = [],
    usedElements = [];

function permute(input) {
    let i, element;
    for (i = 0; i < input.length; i++) {
        element = input.splice(i, 1)[0];    // take 1st element
        usedElements.push(element);
        if (input.length === 0) {
            // All elements of input were used
            permArr.push(usedElements.slice());
        }
        permute(input);
        input.splice(i, 0, element);
        usedElements.pop();
    }
    return permArr
}

console.log(permute([1, 2, 3]));
console.log(permute('abc'.split('')));
