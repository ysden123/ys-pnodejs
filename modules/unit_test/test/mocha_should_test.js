// Unut tests by mocha with chai.should
'use strict';
var chai = require('chai');
var should = chai.should();
var api = require('../api');

describe('api (assert with should)', function() {
    it('f1(3) should return 6', function(){
        api.f1(3).should.equal(6);
    });

    it('f2() should return "done"', (done) => {
        api.f2()
            .then((result) => {
                result.should.equal('done');
            })
            .catch((error) => {
                done(error);
            });
    });
});