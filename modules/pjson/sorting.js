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

console.log('(o1) original:', o1.objs);

o1.objs.sort((a,b)=>a.key > b.key);
console.log('sorted (asc):', o1.objs);

o1.objs.sort((a,b)=>a.key < b.key);
console.log('sorted (desc):', o1.objs);

const o2 = {
    objs: [
        { key: "1 abc", val: 1 },
        { key: "5 test 5", val: 5 },
        { key: "3 stam", val: 3 },
        { key: "6 66", val: 6 },
        { key: "2 two", val: 21 },
        { key: "2 two", val: 22 },
        { key: "2 tow", val: 23 },
        { key: "7 s", val: 7 }
    ]
}


console.log();
console.log('(o2) original:', o2.objs);

o2.objs.sort((a,b)=>a.key > b.key);
console.log('sorted (asc):', o2.objs);

o2.objs.sort((a,b)=>a.key < b.key);
console.log('sorted (desc):', o2.objs);