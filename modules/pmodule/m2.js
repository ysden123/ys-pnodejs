// A module
'use strict';

var M2 = function(coeff) {
    this.coeff = coeff;
}

// Internal function
M2.prototype.convert = function(arg){
    return arg * this.coeff;
}

M2.prototype.f1 = function(arg) {
    return this.convert(arg);
}

M2.prototype.f2 = function(arg){
    return 1 / this.convert(arg);
}

module.exports = M2;