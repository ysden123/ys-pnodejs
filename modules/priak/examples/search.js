// Search
'use strict';

const conf = require('../conf/config').conf;
const nodiak = require('nodiak');
const manager = require('simple-node-logger').createLogManager();
const logger = manager.createLogger('[search]');
const util = require('util');

const riak = nodiak.getClient(conf.riak.backend, conf.riak.host, conf.riak.port);
const bucket = riak.bucket('multiple objects');

// Search by key
let key = `key for item 2`;

// Check, if exists
bucket.object.exists(key,(err,rslt)=>{
   if (err){
       logger.error(err);
   } else{
       logger.info(`Call exists returned ${rslt}`);
   }
});