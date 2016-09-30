'use strict';
const should = require('chai').should();
const Downloader = new require('./..').Downloader3;
/**
 * Created by Yuriy Stul on 9/10/2016.
 */
describe('Downloader', function () {
    describe('#download', function () {
        it('should emulate downloading', function (done) {
            this.timeout(4000);
            let wasStarted = false;

            let downloader = new Downloader()
                .on('start', (url, time) => {
                    console.log(`on start: url is ${url}, time is ${time}.`);
                    wasStarted = true;
                })
                .on('end', (url, time) => {
                    console.log(`on end: url is ${url}, time is ${time}.`);
                    if (wasStarted) {
                        done();
                    } else {
                        done(new Error('Was not started'));
                    }
                });

            downloader.download('the URL');
        });
    });
});
