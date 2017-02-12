/**
 * Map/Set & WeakMap/WeakSet
 * Set Data-Structure
 * Cleaner data-structure for common algorithms based on sets.
 *
 * Works on NodeJs 4
 *
 * Created by Yuriy Stul on 2/12/2017.
 */
'use strict';
let s = new Set();
s.add("hello")
    .add("goodbye")
    .add("hello");
console.log(`s.size === 2 : ${s.size === 2}`);
console.log(`s.has("hello") === true : ${s.has("hello") === true}`);
for (let key of s.values()) // insertion order
    console.log(key);