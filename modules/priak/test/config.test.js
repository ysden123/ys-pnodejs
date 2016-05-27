'use strict';
const should = require('chai').should();
const conf = require('../conf/config').conf;

describe('config', function () {
    describe('#riak', function () {
        describe('##backend', function () {
            it('should be string', function () {
                should.exist(conf.riak.backend);
                conf.riak.backend.should.be.a('string');
            });
        })
        describe('##host', function () {
            it('should be string', function () {
                should.exist(conf.riak.host);
                conf.riak.host.should.be.a('string');
            });
        })
        describe('##port', function () {
            it('should be number', function () {
                should.exist(conf.riak.port);
                conf.riak.port.should.be.a('number');
            });
        })
    })
})