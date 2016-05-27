// Reads multiple objects
'use strict';

const conf = require('../conf/config').conf;
const nodiak = require('nodiak');
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[multiple_objects_reader]');
const util = require('util');

const riak = nodiak.getClient(conf.riak.backend, conf.riak.host, conf.riak.port);

function generateKeys(amount) {
    let keys = [];

    for (let item = 1; item <= amount; ++item) {
        const key = `key for item ${item}`;
        keys.push(key);
    }
    return keys;
}


// Create or get bucket.
const bucket = riak.bucket('multiple objects');

let keys = generateKeys(3);

logger.info('Reading data...');
keys.forEach(key => {
    bucket.objects.get(key, (err, obj) => {
        if (err) {
            logger.error(err);
        } else {
            logger.info(obj.data);
            // console.log(obj);
        }
    });
});
// bucket.objects.get(keys, (err, obj) => {
//     if (err) {
//         logger.error(err);
//     } else {
//         logger.info(obj.data);
//         // console.log(obj);
//     }
// });