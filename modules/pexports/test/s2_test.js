'use strict'
var s2 = require('..').s2;
var should = require('chai').should(); 

describe('s2', function() {
    describe('#foo2', function() {
        it('Should return s2.foo2', function() {
            s2.foo2().should.be.a('string');
            s2.foo2().should.equal('s2.foo2');
        })
    });
    describe('#foo21', function() {
        it('Should return s2.foo21', function() {
            s2.foo21().should.be.a('string');
            s2.foo21().should.equal('s2.foo21');
        })
    });
    describe('#foo22', function() {
        it('Should return s1.foo1', function() {
            s2.foo22().should.be.a('string');
            s2.foo22().should.equal('s1.foo1');
        })
    });
});