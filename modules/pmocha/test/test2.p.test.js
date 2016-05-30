// Mocha with promise but without usage done function.
'use strict';
const should = require('chai').should();
const test2 = require('../lib/test2.p.js').test2;

describe('Mocha for promise', function() {
    it('Should work w/o analysis', function() {
        return test2();
    });

    it('Should work with analysis', function() {
        return test2()
            .then(rslt => {
                rslt.should.be.equal(123);
            });
    });
})
