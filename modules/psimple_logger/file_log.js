// File logging
'use strict'

const log = require('simple-node-logger').createSimpleFileLogger('test-file-logger.log');
console.log(`Default level is ${log.getLevel()}`);
log.setLevel('debug');
const msg1 = 'debug';
log.debug('This is ', msg1, ' log message');
const msg2 = 'info';
log.info('This is ', msg2, ' log message');
