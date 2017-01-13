/**
 * Created by Yuriy Stul on 1/13/2017.
 */
'use strict';
const handler = {
    get: function (target, name) {
        return name in target ? target[name] : 37
    }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);       // 1, undefined
console.log('c' in p, p.c);  // false, 37