// Unit tests for module api
var chai = require('chai');
var expect = chai.expect;
var api = require('../api');

describe('api', () => {
    it('f1(3) should return 6', () => {
        expect(api.f1(3)).to.equal(6);
    });
    
    //    it('f1(3) should return 7 (test failure)',()=>{
    //        expect(api.f1(3)).to.equal(7);
    //    }); 
    
    it('f2() should return "done"', (done) => {
        api.f2()
            .then((result) => {
                expect(result).to.equal('done');
                done();
            })
            .catch((error) => {
                assert.fail(error);
                done();
            });
    });
});