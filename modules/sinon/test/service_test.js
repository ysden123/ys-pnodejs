'use strict';
const srv = require('../lib/service');
const database = require('../lib/database');
const sinon = require('sinon');
const chai = require('chai');
const should = chai.should();

describe('service', function () {
    describe('#useSave', function () {
        it('Should work with original database', function () {
            srv.useSave();
        });

        it('Should work with stubbed database', function () {
            let save = sinon.stub(database, 'save');
            srv.useSave();
            save.restore();
        });
    });

    describe('#get', function () {
        it('Should work with original database', function () {
            srv.useGet(123).should.equal('result for index=123');
        });

        it('Should work with stubbed database', function () {
            let get = sinon.stub(database, 'get');
            get.returns('stubbed result 999');
            srv.useGet(456).should.equal('stubbed result 999');
            get.restore();
        });
    })
})