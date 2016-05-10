'use strict';
const srv = require('..').service;
const database = require('../lib/database');
const sinon = require('sinon');

describe('service', function () {
    describe('#useSave', function () {
        it('Should work with original database', function () {
            srv.useSave();
        });
        it('Should work with stubbed database', function () {
            let save = sinon.stub(database,'save');
            srv.useSave();
            save.restore();
        });
    })
})