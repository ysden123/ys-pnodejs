'use strict';
var C1 = function() {
    var self = this;
    self.foo = function() {
        console.log('==>foo');
    }
}

module.exports = new C1();