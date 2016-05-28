// Writes single object with promise
'use strict'

const conf = require('../conf/config').conf;
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[single_object_writer_p]');

const Client = require('riaks');
const client = new Client({
    host: conf.riak.host,
    protocol: conf.riak.backend,
    port: conf.riak.port
});

client.connect()
    .then(() => logger.info('Connected'))
    .catch((err) => logger.error(err));

const origObjects = [
    { name: '3rd', value: 3 },
    { name: '1st', value: 1 },
    { name: '2nd', value: 2 }
];

const bucket_name = 'simple objects p';
const key = 'single object';

client.saveWithKey({
    bucket: bucket_name,
    key: key,
    value: origObjects
})
    .then(() => logger.info("Saved"))
    .catch((err) => logger.error(err));