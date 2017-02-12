/**
 * Demonstrates usage of Symbol.
 *
 * Symbol is unique and immutable data type.
 * Symbol may be used as identifier for object properties.
 * Symbol is wrapper for primitive symbol type.
 *
 * Doesn't work on NodeJs 4.
 *
 * Created by Yuriy Stul on 1/13/2017.
 */
'use strict';

const s1 = Symbol("s1");
const s2 = Symbol("s1");
console.log(s1 == s2);       // false
console.log(s1 === s2);      // false

const COLOR_RED = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN = Symbol('Green');
const COLOR_BLUE = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            throw new Exception('Unknown color: ' + color);
    }
}

console.log('getComplement(COLOR_RED):');
console.log(getComplement(COLOR_RED));
try {
    console.log("getComplement(Symbol('Red')):");
    console.log(getComplement(Symbol('Red')));
} catch (e) {
    console.log('***Error:', e);
}

if (getComplement(COLOR_RED) == COLOR_GREEN)
    console.log("Using green brush");
else
    console.log("ERROR");