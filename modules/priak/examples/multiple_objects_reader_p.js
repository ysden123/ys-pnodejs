// Reads multiple objects with promise.
'use strict'

const conf = require('../conf/config').conf;
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[multiple_objects_reader_p]');

const Client = require('riaks');
const client = new Client({
    host: conf.riak.host,
    protocol: conf.riak.backend,
    port: conf.riak.port
});

client.connect()
    .then(() => logger.info('Connected'))
    .catch((err) => logger.error(err));

const bucket_name = 'multiple objects p';


function generateKeys(amount) {
    let keys = [];

    for (let item = 1; item <= amount; ++item) {
        const key = `key for item ${item}`;
        keys.push(key);
    }
    return keys;
}

logger.info('Reading data, object by object...');
let keys = generateKeys(3);

keys.forEach((key) => {
    logger.info(`Reading for key ${key}`);
    client.getWithKey({
        bucket: bucket_name,
        key: key
    })
        .then((data) => logger.info(data))
        .catch((err) => logger.error(err));
})