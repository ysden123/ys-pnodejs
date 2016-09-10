'use strict';
const should = require('chai').should();
const Downloader = new require('./..').Downloader3;
/**
 * Created by Yuriy Stul on 9/10/2016.
 */
describe('Downloader', function () {
    describe('#download', function () {
        it('should emulate downloading', function(done){
            this.timeout(4000);
            let wasStarted = false;

            let downloader = new Downloader()
                .on('start', d =>{
                    console.log('on start:', d);
                    wasStarted = true;
                })
                .on('end', d =>{
                    console.log('on end:', d);
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
