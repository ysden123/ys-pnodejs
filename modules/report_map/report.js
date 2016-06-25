'use strict';
const rl = require('readline');
const fs = require('fs');
const util = require('util');

const cache = new Map();
const writer = fs.createWriteStream('report.csv');
function readReport(file, handler) {
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

function handler(line) {
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
    let prev = cache.get(o.k);
    if (prev != undefined) {
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
    cache.set(o.k, o);
}

readReport('data1.txt', handler)
    .then(() => { return readReport('data2.txt', handler) })
    .then(() => { return readReport('data3.txt', handler) })
    .then(() => { return readReport('data1.txt', handler) })
    .then(() => { return readReport('data2.txt', handler) })
    .then(() => { return readReport('data3.txt', handler) })
    .then(() => {
        writer.close();
        console.log(`cache.size=${cache.size}`);
    })
    .catch(err => console.error(err));

