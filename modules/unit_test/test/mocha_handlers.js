// Unit tests with mocha, the use of "before" and "after" features.
'use strict';
var chai = require('chai');
var should = chai.should();

describe('before and after', function() {
    var theTV;
    before(function() {
        console.log('In "before" handler');
        theTV = "123";
    });
    after(function() {
        console.log('In "after" handler');
        theTV = '';
    });

    describe('test1', function() {
        it('test1 should work!', function() {
            console.log('Running "test1 should work!"');
            console.log(`theTV: ${theTV}`);
            var v1 = 3;
            v1.should.equal(3);
        });
        it('test1 should use string!', function() {
            console.log('Running "test1 should work!"');
            console.log(`theTV: ${theTV}`);
            var v1 = '3';
            v1.should.be.a('string');
        });
        it('test1 should use number!', function() {
            console.log('Running "test1 should work!"');
            console.log(`theTV: ${theTV}`);
            var v1 = 3;
            v1.should.be.a('number');
        });
    });
});