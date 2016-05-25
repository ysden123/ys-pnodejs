// Playing with array functions
'use strict';

const a1 = [1, 2, 3, 4, 5];
console.log(a1);

let rslt = a1.slice();
console.log(rslt);

rslt = a1.slice(0, 3);
console.log(rslt);

rslt = a1.slice(1, 3);
console.log(rslt);

rslt = a1.slice(1);
console.log(rslt);

rslt = rslt.slice(1);
console.log(rslt);

console.log();
let r = a1;
while (r.length > 1) {
    r = r.slice(1);
    console.log(r);
}
