'use strict';
const manager = require('simple-node-logger').createLogManager();
const db = require('./database');
const logger = manager.createLogger('[service]');
logger.setLevel('debug');

function useSave() {
    logger.debug('==>useSave');
    db.save('data to save');
}
function useGet(index) {
    logger.debug('==>useGet');
    logger.debug(`result from DB: ${db.get(index)}`);
    return db.get(index);
}

module.exports = {
    useSave: useSave,
    useGet: useGet
}