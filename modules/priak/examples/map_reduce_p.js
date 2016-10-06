// Map/reduce with promise.
'use strict';
const conf = require('../conf/config').conf;
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[map_reduce_p]');

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

function getMapReduceOpts() {
    let mapPhaseOpts = {
        map: {
            fn: mapFunction,
            keep: true,
            arg: 'foo'
        }
    }
    let reducePhaseOpts = {
        reduce: {
            fn: reduceFunction,
            keep: true,
            arg: 'foo'
        }
    }
    let opts = {};
    let query = [mapPhaseOpts, reducePhaseOpts];

    // // use a secondary index query as input to the map reduce job ???
    // var inputs = {
    //     bucket: 'test_bucket',
    //     index: 'test_index_key_bin',
    //     start: 'test_start',
    //     end: 'test_end'
    // }
    let inputs = {
        bucket: bucket_name
    }

    opts.query = query;
    opts.inputs = inputs;
    opts.timeout = 1000;// optional
    return opts;
}

function mapFunction(value, keyData, arg) {
    // logger.info('value:', value, ', keyData:', keyData, ', arg:', arg);
    // return ['test'];
    return [];
}

function reduceFunction(list) {
    // logger.info('list.length:', list.length);
    return 0;
}

let readStream = client.mapReduceStream(getMapReduceOpts());
readStream.on('data', data => {
    logger.info('data:', data);
});
readStream.on('error', err => {
    logger.error(err);
})
readStream.on('end', () => {
    logger.info('completed');
})