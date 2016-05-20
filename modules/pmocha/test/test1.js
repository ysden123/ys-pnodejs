'use strict';
const should = require('chai').should();
const pmocha = require('..');

describe('test1', function () {
    describe('foo1', function () {
        it('Should work properly', function () {
            // Everything is OK
        });
        it('should throw exception', function () {
            (function () { pmocha.foo1(); }).should.throw(Error);
        });
    })
})