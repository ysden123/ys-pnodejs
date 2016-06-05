// Big data with file storage.

'use strict';
const fs = require('fs');

function generateData(amount) {
    let datas = [];
    for (let i = 1; i <= amount; ++i) {
        let d = {
            field1: 'gjhgjh ' + i + ' gjhghgjh',
            field2: 'xzxczcxzcxzcxz ' + i * 3 + ' mnmnbmnbmnbmn',
            field3: '{d=' + i / 3 + ' }',
            field4: 'mumu ' + i + ' cucu'
        };
        datas.push(d);
    }
    return datas;
}

function compareObject(o1, o2) {
    if (o1 < o2) {
        return -1;
    } else if (o1 > o2) {
        return 1
    } else {
        return 0;
    }
}

function compare(d1, d2) {
    let rslt = compareObject(d1.field1, d2.field1);
    if (rslt != 0) {
        rslt = compareObject(d1.field2, d2.field2);
        {
            if (rslt != 0) {
                rslt = compareObject(d1.field3, d2.field3);
                if (rslt != 0)
                    rslt = compareObject(d1.field4, d2.field4);
            }
        }
    }
    return rslt;
}

function write(datas, fn) {
    fs.writeFileSync(fn, JSON.stringify(datas));
}

function read(fn) {
    return JSON.parse(fs.readFileSync(fn));
}

console.time('p1');
try {
    let datas = generateData(100000);
    console.log(`datas.length = ${datas.length}`);

    datas = datas.sort(compare);
    for (let i = 0; i < 20 && i < datas.length; ++i) {
        console.log({ d: datas[i] });
    }

    write(datas, 'datas.json');
    let datas2 = read('datas.json');
    for (let i = 0; i < datas.length; ++i) {
        if (compare(datas[i], datas2[i])) {
            console.log('***ERROR');
        }
    }
    
    datas = datas.concat(datas2).sort(compare);
    write(datas, 'datas2.json');
}
catch (err) {
    console.log(err);
}
console.timeEnd('p1');