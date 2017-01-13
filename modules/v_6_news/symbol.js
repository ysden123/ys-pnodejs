/**
 * Created by Yuriy Stul on 1/13/2017.
 */
'use strict';

const s1 = Symbol("s1");
const s2 = Symbol("s1");
console.log(s1 == s2);       // false
console.log(s1 === s2);      // false