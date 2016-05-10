'use strict';
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[database]');
logger.setLevel('debug');

function save(data) {
    logger.debug(`save`);
}

function get(index) {
    logger.debug(`get, index=${index}`);
    return 'result for index=' + index;
}

module.exports = {
    save: save,
    get: get
}