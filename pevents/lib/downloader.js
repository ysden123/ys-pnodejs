// Emulator of a downloader.
'use strict';
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Downloader = function(url) {
    var self = this;

    setTimeout(() => {
        self.emit('start', url);
    }, 0);

    setTimeout(() => {
        self.emit('end', url);
    }, 3000);

    this.on('newListener', (listener) => {
        console.log('Event listener:', listener);
    });
}

util.inherits(Downloader, EventEmitter);
exports.Downloader = Downloader;
