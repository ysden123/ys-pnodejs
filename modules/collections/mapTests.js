'use strict';
const a1=[1,2,3,4,5,6];
let a2 = a1.map(i=>i+10);
console.log(a2);
let a3 = a1.map(i=> {return i+10});
console.log(a3);