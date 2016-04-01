'use strict';
// var d = require('..');
var Downloader = require('./../lib/downloader2').Downloader;

describe('Downloader2', function() {
    it('Should emulate downloading', function(done) {
        this.timeout(4000);
        let wasStarted = false;
        let downloader = new Downloader()
            .on('start', (d) => {
                console.log('on start:', d);
                wasStarted = true;
            })
            .on('end', (d) => {
                console.log('on end:', d);
                if (wasStarted) {
                    done();
                } else {
                    done(new Error('Was not started'));
                }
            });

        downloader.download('test url');
    });
});
