// Emulator of a downloader.
'use strict';
var util = require('util');
var events = require('events');

function Downloader() {
    events.EventEmitter.call(this);

    var self = this;

    this.on('newListener', (listener) => {
        console.log('Event listener:', listener);
    });
}

util.inherits(Downloader, events.EventEmitter);

Downloader.prototype.download = function(url) {
    var self = this;
    setTimeout(() => {
        self.emit('start', url);
    }, 0);

    setTimeout(() => {
        self.emit('end', url);
    }, 3000);
}

exports.Downloader = Downloader;
// module.exports = Downloader;

// test
var d = new Downloader();
console.log(d);
d.download('UUURRRLLL');
