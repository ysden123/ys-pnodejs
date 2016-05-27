'use strict';
const should = require('chai').should();
const conf = require('../conf/config').conf;

describe('config', function () {
    describe('#riak', function () {
        describe('##host', function () {
            it('should be string', function () {
                should.exist(conf.riak.host);
                conf.riak.host.should.be.a('string');
            });
        })
    })
})