'use strict';
const getGoogle = require('..').getGoogle;
const should = require('chai').should();
const nock = require('nock');

describe('getGoogle', function() {
    const expectedBody = '<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">\n'
        + '<TITLE>302 Moved</TITLE></HEAD><BODY>\n<H1>302 Moved</H1>\nThe document has moved\n'
        + '<A HREF="http://www.google.co.il/?gfe_rd=cr&amp;ei=T_2RV5eSOPKP8Qf0t5noBg">here</A>.\r\n</BODY></HTML>\r\n';
    beforeEach(function() {
        // Mock Google
        nock('http://www.google.com')
            .get('/')
            .reply(302, expectedBody, {
                'header1': 'value1',
                'header2': 'value2'
            });
    });
    it('Should return body', function(done) {
        getGoogle((r) => {
            // console.log(r);
            r.statusCode.should.equal(302);
            r.body.should.equal(expectedBody);
            r.headers.header1.should.equal('value1');
            r.headers.header2.should.equal('value2');
            done();
        })
    })
})