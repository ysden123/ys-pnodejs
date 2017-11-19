/*
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';
let a1 = [1, 2, 3, 4, 5];
console.log(`a1: ${a1}, a1.slice(): ${a1.slice()}`);
console.log(`a1: ${a1}, a1.slice(1): ${a1.slice(1)}`);
console.log(`a1: ${a1}, a1.slice(1,3): ${a1.slice(1, 3)}`);
console.log(`a1: ${a1}`);

console.log();
console.log(`a1: ${a1}, a1.splice(): ${a1.splice()}`);
console.log(`a1: ${a1}, a1.splice(1): ${a1.splice(1)}`);
console.log(`a1: ${a1}, a1.splice(1,3): ${a1.splice(1, 3)}`);
console.log(`a1: ${a1}`);

console.log();
a1 = [1, 2, 3, 4, 5];
console.log(`a1: ${a1}, a1.splice(1,3): ${a1.splice(1, 3)}`);