'use strict';

const conf = require('../conf/config').conf;
const Riak = require('basho-riak-client');

const nodes = [conf.riak.host + ':' + conf.riak.port]
var client = new Riak.Client(nodes, function(err, c) {
    if (err) {
        console.error('Failed connect. Error: ' + err);
    } else {
        console.log('Connected.');
        // client.ping((err)=>{
        client.ping(function(err, rslt) {
            if (err) {
                console.error('Failed ping: ' + err);
            } else {
                // On success, ping returns true
                console.log('Succeeded ping: ' +  rslt);
            }
        });
        // const listBuckets = new Riak.ListBuckets.Builder()
        //     .withCallback((err, response, data) => {
        //         console.log('hi');
        //         if (err) {
        //             console.error('Failed getting list of buckets. Error: ' + err + ', data:' + data);
        //         } else {
        //             console.log(response.buckets);
        //             console.log(response.done);
        //         }
        //     })
        //     .build();

        //     client.execute(listBuckets);

        // c.stop((err, rslt) => {
        //     if (err) {
        //         console.error('Failed close client');
        //     } else {
        //         console.log('Closes');
        //     }
        // })
    }
});

