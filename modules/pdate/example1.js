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
formatDate(d2);
function formatDate(d){
    let year = d.getUTCFullYear();
    let day = d.getUTCDay();
    let month = d.getUTCMonth() + 1;
    let hours=d.getUTCHours();
    let minutes=d.getUTCMinutes();
    let seconds=d.getUTCSeconds();

    console.log(`d: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
}
