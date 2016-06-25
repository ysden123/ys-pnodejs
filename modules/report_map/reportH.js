'use strict'
const rl = require('readline');
const fs = require('fs');
const util = require('util');
const hl = require('hazelcast-client').Client;
const async = require('async');

function buildReport(file, append) {
    let client;
    let map;
    let writer;
    let lines = [];

    function getHazelClient() {
        return new Promise((resolve, reject) => {
            hl.newHazelcastClient()
                .then(theClient => {
                    client = theClient;
                    resolve(theClient);
                })
                .catch(err => reject(err));
        })
    }

    function readReport(file, handler) {
        console.log(`Read ${file}`);
        return new Promise((resolve, reject) => {
            const reader = rl.createInterface({
                input: fs.createReadStream(file)
            });
            reader.on('line', line => {
                handler(line);
            });
            reader.on('close', line => {
                resolve();
            });
        })
    }

    function job(line, callback) {
        let cols = line.split(',');
        let o = {
            k: cols[0],
            c1: Number(cols[1]),
            c1Delta: 0,
            c2: cols[2],
            c2Delta: 0,
            c3: cols[3],
            c3Delta: 0,
        }
        map.get(o.k)
            .then(prev => {
                if (prev != null) {
                    let dif = false;
                    if (prev.c1 != o.c1) {
                        o.c1Delta = o.c1 - prev.c1;
                        dif = true;
                    }
                    if (prev.c2 != o.c2) {
                        o.c2Delta = o.c2 - prev.c2;
                        dif = true;
                    }
                    if (prev.c3 != o.c3) {
                        o.c3Delta = o.c3 - prev.c3;
                        dif = true;
                    }
                    if (dif) {
                        // write to report
                        let row = o.k
                            + ',' + o.c1
                            + ',' + o.c1Delta
                            + ',' + o.c2
                            + ',' + o.c2Delta
                            + ',' + o.c3
                            + ',' + o.c3Delta
                            + '\n';
                        writer.write(row);
                    }
                }
                return map.put(o.k, o);
            })
            .then(() => callback())
            .catch(err => {
                console.error('Handler', err);
                callback(err);
            });
    }

    return new Promise((resolve, rejct) => {
        getHazelClient()
            .then(client => {
                map = client.getMap('adPerfMon');
                if (append) {
                    writer = fs.createWriteStream('report.csv', { flags: 'a' });
                } else {
                    writer = fs.createWriteStream('report.csv');
                }
                return Promise.resolve();
            })
            .then(() => { return readReport(file, (line) => { lines.push(line) }) })
            .then(() => {
                return new Promise((resolve, reject) => {
                    async.eachLimit(lines, 100, job, err => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve();
                    })
                })
            })
            .then(() => {
                writer.close();
                client.shutdown();
                resolve();
            })
            .catch(err => {
                if (writer)
                    writer.close();
                if (client)
                    client.shutdown();
                reject(err);
            })
    })
}

console.time('total');
console.time('run 1');
buildReport('data1.txt')
    .then(() => {
        console.timeEnd('run 1');
        console.time('run 2');
        return buildReport('data2.txt', 'a');
    })
    .then(() => {
        console.timeEnd('run 2');
        console.time('run 3');
        return buildReport('data3.txt', 'a');
    })
    .then(() => {
        console.timeEnd('run 3');
        console.timeEnd('total');
        console.log('Done');
    })
    .catch(err => {
        console.log('Failure.', err);
    });