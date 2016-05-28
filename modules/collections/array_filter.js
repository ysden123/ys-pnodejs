// Array filtering
'use strict';

function generateKeys(amount) {
    let a = [];
    for (let i = 1; i <= amount; ++i) {
        a.push({ v1: `v1 # ${i}`, v2: `v2 # ${i}`, v3: `v3 # ${i}` })
    }
    return a;
}

let a1 = generateKeys(5);
let a11 = a1.filter((item) => {
    return item.v2 === 'v2 # 2';
});
console.log('original array',a1);
console.log('(1) filtered array',a11);

let a12 = a1.filter((item) => {
    return item.v2 > 'v2 # 2';
});
console.log('(2) filtered array',a12);