'use strict';
const should = require('chai').should();
describe('eventually', function() {
    it('should work with promise', function(done) {
        Promise.resolve(1).
            then(r => {
                console.log({ r: r });
                r.should.equal(1);
                done();
            }).catch(e => done(e));
        // done();
    });
})