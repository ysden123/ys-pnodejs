// A module
'use strict';

// Data member
var coeff = 3;

// Internal function
function convert(arg) {
    return arg * coeff;
}

exports.f1 = (arg) => {
    return convert(arg);
}

exports.f2 = (arg) => {
    return 1 / convert(arg);
}