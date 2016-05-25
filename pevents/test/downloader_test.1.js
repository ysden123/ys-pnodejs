'use strict';
var d = require('..');

describe('Downloader 1', function() {
    it('Should emulate downloading', function(done) {
        this.timeout(4000);
        let wasStarted = false;
        new d.Downloader('the url')
            .on('start', (d) => {
                // console.log('on start:', d);
                wasStarted = true;
            })
            .on('end', (d) => {
                // console.log('on finish', d);
                if (wasStarted) {
                    done();
                } else {
                    done(new Error('Was not started'));
                }
            });
    });
});
