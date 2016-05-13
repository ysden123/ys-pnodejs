// Database engine
'use strict';
const logger = require('simple-node-logger').createLogManager().createLogger('[database]');

function get(key) {
    logger.info(`get(${key})`);
    return `value for ${key}`;
}

module.exports = {
    get: get
}