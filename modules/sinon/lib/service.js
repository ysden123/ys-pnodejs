'use strict';
const manager = require('simple-node-logger').createLogManager();
const db = require('./database');
const logger = manager.createLogger('[service]');
logger.setLevel('debug');

function useSave() {
    logger.debug('==>useSave');
    db.save('data to save');
}

module.exports = {
    useSave: useSave
}