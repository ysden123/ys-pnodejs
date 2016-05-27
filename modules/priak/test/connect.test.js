'use strict';
const should = require('chai').should();
const conf = require('../conf/config').conf;
const nodiak = require('nodiak');

describe('connection', function () {
    this.timeout(1000 * 60 * 3);
    it('Should work', function (done) {
        let riak = nodiak.getClient(conf.riak.backend, conf.riak.host, conf.riak.port);
        riak.ping((err, res) => {
            if (err) {
                done(err)
            } else {
                should.exist(res);
                res.should.be.a('string');
                res.should.equal('OK');
                done();
            }
        })
    });
});