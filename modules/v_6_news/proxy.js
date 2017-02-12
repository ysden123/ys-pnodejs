/**
 * Demonstrates usage of Proxy.
 *
 * The Proxy object is used to define custom behavior
 * for fundamental operations (e.g. property lookup,
 * assignment, enumeration, function invocation, etc).
 *
 * Allows to extend an object behavior. This is metaprogramming instrument
 *
 * Created by Yuriy Stul on 1/13/2017.
 */
'use strict';
const handler = {
    // A trap for getting property values.
    get: function (target, name) {
        console.log(`in get: target is ${target}, name is ${name}`);
        // Return default value, if the name is not in target (doesn't exist in the object)
        return name in target ? target[name] : 37
    }
};

const p = new Proxy({}, handler);
// Add new properties
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);       // 1, undefined
console.log('c' in p, p.c);  // false, 37

const o1 = {
    a: "the a",
    b: " 123"
};

const p1 = new Proxy(o1, handler);
p1.added="the added value";
console.log(p1.a, p1.b);       // 1, undefined
console.log('c' in p1, p1.c);  // false, 37
console.log('added' in p1, p1.added);  // true, "the added value"
