'use strict';
var d = require('..');

// var downloader = new d.Downloader('the url');

// downloader.on('start', (d) => console.log('on start:', d));
// downloader.on('end', (d) => console.log('on finish', d));

describe('Downloader', function() {
    it('Should emulate downloading', function(done) {
        this.timeout(4000);
        let wasStarted = false;
        let downloader = new d.Downloader('the url');

        downloader.on('start', (d) => {
            // console.log('on start:', d);
            wasStarted = true;
        });
        downloader.on('end', (d) => {
            // console.log('on finish', d);
            if (wasStarted) {
                done();
            } else {
                done(new Error('Was not started'));
            }
        });
    });
});
