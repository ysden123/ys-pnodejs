// Writes multiple objects with promise.
'use strict'

const conf = require('../conf/config').conf;
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[multiple_objects_writer_p]');

const Client = require('riaks');
const client = new Client({
    host: conf.riak.host,
    protocol: conf.riak.backend,
    port: conf.riak.port
});

client.connect()
    .then(() => logger.info('Connected'))
    .catch((err) => logger.error(err));

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

const origObjects = generateObjects(3);
const bucket_name = 'multiple objects p';

for (let item = 0; item < origObjects.keys.length; ++item) {
    let key = origObjects.keys[item];
    let data = origObjects.datas[item];

    logger.info(`Saving item ${item}`)
    client.saveWithKey({
        bucket: bucket_name,
        key: key,
        value: data
    })
        .then(() => logger.info(`Saved item ${item}`))
        .catch((err) => logger.error(err));
}