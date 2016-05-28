// Writes single object with promise
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


const origObjects = [
    { name: '3rd', value: 3 },
    { name: '1st', value: 1 },
    { name: '2nd', value: 2 }
];

const bucket_name = 'simple objects p';
const key = 'single object';

// var opts = {
//   bucket: 'test_bucket',
//   key: 'test_key',
//   indices: {
//     test_index_one: '45'
//     test_index_two: 'foo'
//   },
//   returnBody: true, // (optional) whether to return the contents of the stored object. defaults to false 
//   value: 'test_value_here'
// }
// var promise = client.saveWithKey(opts)
// promise.then(function() {
//   // if key is not found value will be undefined 
//   console.dir('key saved')
// })

client.saveWithKey({
    bucket: bucket_name,
    key: key,
    value: origObjects
})
    .then(() => logger.info("Saved"))
    .catch((err) => logger.error(err));