'use strict';

function toString(o) {
    return JSON.stringify(o);
}

function toObject(s) {
    return JSON.parse(s);
}

let oOrig =
    [
        { key: 'k1', v: 'v1' },
        { key: 'k2', v: 'v2' },
        { key: 'k3', v: 'v3' }
    ];

console.log({ original: oOrig });
let s = toString(oOrig);
console.log({ toString: s });
let o = toObject(s);
console.log({ toObject: o });

let equal = typeof oOrig === typeof o;
if (equal) {
    equal = oOrig.length == o.length;
}
for (let i = o; equal && i < oOrig.length; ++i) {
    equal = oOrig[i] === o[i];
}
console.log(`equal? - ${equal}`);