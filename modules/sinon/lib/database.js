'use strict';
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[database]');
logger.setLevel('debug');

function save(data){
    logger.debug(`save`);
}

module.exports = {
    save: save
}