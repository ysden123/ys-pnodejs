'use strict';
let withForEachTotal = 0;
let withMapTotal = 0;

function generateArray(n) {
    let a = [];
    for (let i = 1; i <= n; ++i) {
        a.push({
            f1: `f1 - ${i}`,
            f2: `f2 - ${i}`,
            f3: `f3 - ${i}`,
            f4: `f4 - ${i}`
        })
    }
    return a;
}

function withForEach(a) {
    let start = new Date();
    let rslt = [];
    a.forEach(item=> {
        rslt.push(item.f1 + item.f2 + item.f3 + item.f4);
    });
    withForEachTotal += (new Date()) - start;
}

function withMap(a) {
    let start = new Date();
    a.map((item, index, array)=> {
        return item.f1 + item.f2 + item.f3 + item.f4
    });
    withMapTotal += (new Date()) - start;
}

let a = generateArray(1000);
const n = 10;
for (let repeat = 1; repeat <= n; ++repeat) {
    withForEach(a);
    withMap(a);
}

console.log('Start...');
console.log(`withForEach = ${withForEachTotal / n}, withMap = ${withMapTotal / n}`);
