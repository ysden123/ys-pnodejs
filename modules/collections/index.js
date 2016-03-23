// Playing with collections
'use strict';
function pMap() {
    console.log('==>pMap');
    let m = new Map();
    for (var index = 1; index <= 5; index++) {
        m.set('key' + index, 'value ' + index);
    }

    console.log(m.get('key1'));
}

pMap();

function pArray() {
    console.log('==>pArray');
    let a = new Array();

    for (let i = 1; i <= 5; ++i) {
        let row = '';
        for (let j = 1; j <= 3; ++j) {
            row += '"val ' + i + j + '"';
            if (j < 3) {
                row += ',';
            } else {
                row += '\n';
            }
        }
        a.push(row);
    }
    console.log(a);
    require('fs').writeFileSync('array1.txt', a);
    require('fs').writeFileSync('array2.txt', JSON.stringify(a));
}

pArray();

function pBuffer() {
    console.log('==>pBuffer');
    let b = new Buffer(0);

    for (let i = 1; i <= 5; ++i) {
        let row = '';
        for (let j = 1; j <= 3; ++j) {
            row += '"val ' + i + j + '"';
            if (j < 3) {
                row += ',';
            } else {
                row += '\n';
            }
        }
        b.write(row);
    }
    console.log(b);
    require('fs').writeFileSync('array3.txt', b.toString());
    require('fs').writeFileSync('array4.txt', JSON.stringify(b.toString()));
}

pBuffer();

function pStream(){
     console.log('==>pStream');
    let s = require('fs').createWriteStream('stream1.txt');

    for (let i = 1; i <= 5; ++i) {
        let row = '';
        for (let j = 1; j <= 3; ++j) {
            row += '"val ' + i + j + '"';
            if (j < 3) {
                row += ',';
            } else {
                row += '\n';
            }
        }
        s.write(row);
    }
    s.end();
}
pStream();