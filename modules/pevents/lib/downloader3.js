'use strict';
var events = require('events');
var util = require('util');

// Define Downloader class
var Downloader = function() {
    // Bind Downloader class with EventEmitter class.
    events.EventEmitter.call(this);

    var self = this;

    // Handle 'newListener' event
    this.on('newListener', (listener) => {
        console.log('Event listener:', listener);
    });

    self.download = function(url) {
        console.log(`download(${url})`);

        setTimeout(() => {
            console.log('Emit start event.');
            // Emit 'start' event
            self.emit('start', url, new Date());
        }, 0);

        setTimeout(() => {
            console.log('Emit end event.');
            // Emit 'end' event
            self.emit('end', url, new Date());
        }, 3000);
    }
};

// Define that Downloader extends EventEmitter.
util.inherits(Downloader, events.EventEmitter);

module.exports.Downloader = Downloader;