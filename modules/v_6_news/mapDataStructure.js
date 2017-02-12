/**
 * Map/Set & WeakMap/WeakSet
 * Map Data-Structure
 * Cleaner data-structure for common algorithms based on maps.
 *
 * Doesn't work on NodeJs 4
 *
 * Created by Yuriy Stul on 2/12/2017.
 */
'use strict';
let m = new Map();
let s = 'sss';
m.set("hello", 42);
m.set(s, 34);
console.log(`m.get(s) === 34: ${m.get(s) === 34}`);
console.log(`m.size === 2: ${m.size === 2}`);
for (let [key, val] of m.entries())
    console.log(key + " = " + val)