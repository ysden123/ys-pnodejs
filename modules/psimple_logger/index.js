// Console logging
'use strict'

const log = require('simple-node-logger').createSimpleLogger();
console.log(`Default level is ${log.getLevel()}`);
log.setLevel('debug');
const msg1 = 'debug';
log.debug('This is ', msg1, ' log message');
const msg2 = 'info';
log.info('This is ', msg2, ' log message');


// create a log manager
const manager = require('simple-node-logger').createLogManager();
const log2 = manager.createLogger('[A category name]');
log2.info('Logging with category');