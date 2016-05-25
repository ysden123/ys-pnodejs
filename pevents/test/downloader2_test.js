'use strict';
var Downloader = require('./..').Downloader2;

describe('Downloader2', function() {
    it('Should emulate downloading', function(done) {
        this.timeout(4000);
        let wasStarted = false;
        // let downloader = new Downloader()
        (new Downloader()
            .on('start', (d) => {
                console.log('on start:', d);
                wasStarted = true;
            }))
            .on('end', (d) => {
                console.log('on end:', d);
                if (wasStarted) {
                    done();
                } else {
                    done(new Error('Was not started'));
                }
            })
            .download('test url');
    });
});
