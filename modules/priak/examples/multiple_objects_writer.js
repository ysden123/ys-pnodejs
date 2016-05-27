// Writes multiple objects
'use strict';

const conf = require('../conf/config').conf;
const nodiak = require('nodiak');
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[multiple_objects_writer]');
const util = require('util');

function generateObjects(amount) {
    const objects = {
        keys: [],
        datas: []
    }

    for (let item = 1; item <= amount; ++item) {
        const key = `key for item ${item}`;
        objects.keys.push(key);

        const data = [];
        for (let ii = 1; ii <= 3; ++ii) {
            data.push({
                name: `name ${item} - ${ii}`,
                value: `value ${item} - ${ii}`,
            });
        }
        objects.datas.push(data);
    }

    return objects;
}

const riak = nodiak.getClient(conf.riak.backend, conf.riak.host, conf.riak.port);

// Create or get bucket.
const bucket = riak.bucket('multiple objects');
const origObjects = generateObjects(3);

for (let item = 0; item < origObjects.keys.length; ++item) {
    let key = origObjects.keys[item];
    let data = origObjects.datas[item];
    const obj = bucket.object.new(key, data);

    logger.info(`Saving item ${item}`)
    bucket.objects.save(obj, (err, rslt) => {
        if (!err) {
            logger.info('Saved.');
        }
    });
}