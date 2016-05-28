// Reads single object with promise
'use strict'

const conf = require('../conf/config').conf;
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[connects]');

const Client = require('riaks');
const client = new Client({
    host: conf.riak.host,
    protocol: conf.riak.backend,
    port: conf.riak.port
});

client.connect()
    .then(() => logger.info('Connected'))
    .catch((err) => logger.error(err));

const bucket_name = 'simple objects p';
const key = 'single object';

client.getWithKey({
    bucket: bucket_name,
    key: key
})
    .then((data) => logger.info(data))
    .catch((err) => logger.error(err));