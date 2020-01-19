'use strict';

const log4js = require('log4js');
log4js.configure({
    appenders: {
        fileLogs: {type: 'file', filename: 'logs/plog4s.log'},
        console: {type: 'console'}
    },
    categories: {
        default: {appenders: ['console', 'fileLogs'], level: 'debug'}
    }
});
const logger = log4js.getLogger();
logger.level = 'debug';
logger.debug('Some debug messages');
logger.error('Some error messages');
logger.info('Some info messages');
const i = 123;
logger.debug(`i = ${i}`);