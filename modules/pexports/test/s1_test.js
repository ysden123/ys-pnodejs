'use strict'
var s1 = require('..').s1;
var should = require('chai').should(); 

describe('s1', function() {
    describe('#foo', function() {
        it('Should return s1.foo', function() {
            s1.foo().should.be.a('string');
            s1.foo().should.equal('s1.foo');
        })
    });
    describe('#foo1', function() {
        it('Should return s1.foo1', function() {
            s1.foo1().should.be.a('string');
            s1.foo1().should.equal('s1.foo1');
        })
    });
});