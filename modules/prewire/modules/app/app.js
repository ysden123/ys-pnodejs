// An application
'use strict';

let db = require('../../modules/database');
const logger = require('simple-node-logger').createLogManager().createLogger('[app]');

function useGet() {
    logger.info('Call get');
    let rslt = db.get('app key');
    logger.info(`rslt is ${rslt}`);
}

module.exports = {
    useGet: useGet
}

useGet();