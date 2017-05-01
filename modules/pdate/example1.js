/*
 * Playing with Date
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';
let d1 = new Date();
console.log(`d1: ${d1}`);
let d2 = new Date(new Date().toGMTString());
console.log(`d2: ${d2}`);

console.log(`new Date().toGMTString(): ${new Date().toGMTString()}`);
