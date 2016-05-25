// Sort json
'use strict';

const o1 = {
    objs: [
        { key: 1, val: 1 },
        { key: 5, val: 5 },
        { key: 3, val: 3 },
        { key: 6, val: 6 },
        { key: 2, val: 2 },
        { key: 2, val: 2 },
        { key: 7, val: 7 }
    ]
}

console.log('original:', o1.objs);

o1.objs.sort((a,b)=>a.key > b.key);
console.log('sorted (asc):', o1.objs);

o1.objs.sort((a,b)=>a.key < b.key);
console.log('sorted (desc):', o1.objs);