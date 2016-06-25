'use strict';
const fs = require('fs');

const file = 'data' + process.argv[2] + '.txt';
const amount = Number(process.argv[3]);
console.log(`Generate report data in ${file} for ${amount} records`);
const writer = fs.createWriteStream(file);

for (let i = 1; i <= amount; ++i) {
    let rec = 'key' + i
        + ',' + Math.round(Math.random() * 20)
        + ',' + Math.round(Math.random() * 30)
        + ',' + Math.round(Math.random() * 40)
        + '\n';
    writer.write(rec);
}
writer.end();
