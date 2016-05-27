// Manipulations with single object
'use strict';

const conf = require('../conf/config').conf;
const nodiak = require('nodiak');
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[single_object]');
const util = require('util');

const riak = nodiak.getClient(conf.riak.backend, conf.riak.host, conf.riak.port);

const origObjects = [
    { name: '3rd', value: 3 },
    { name: '1st', value: 1 },
    { name: '2nd', value: 2 }
]

// Create or get bucket.
const bucket = riak.bucket('simple objects');

// Create new objects
const key = 'single object';
const obj = bucket.object.new(key, origObjects);

// Save in db
logger.info('Saving...');
bucket.objects.save(obj, (err, theObj) => {
    if (err) {
        logger.error('Failed saving. Error:' + err);
    } else {
        logger.info('Saved.');

        // Read from db
        logger.info('Getting...');
        const receivedObjects = bucket.objects.get(key, (err, rslts) => {
            if (err) {
                logger.error('Failed getting. Error:' + err);
            } else {
                logger.info('Results:' + util.inspect(rslts.data));

                // Delete from db
                bucket.objects.delete(rslts, (err, deleteRslt) => {
                    if (err) {
                        logger.error('Failed deleting. Error:' + err);
                    } else {
                        logger.info('Deleted objects');
                    }
                })
            }
        })
    }
});
