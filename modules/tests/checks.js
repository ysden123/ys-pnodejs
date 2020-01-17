'use strict';
/*
Demonstrates way to check null and undefined
*/

const a = {
    aa: '1234text',
    bb: 123,
    cc: null
}

console.log(`typeof a.aa = ${typeof a.aa}`);

console.log(`typeof a.xyz = ${typeof a.xyz}`);

if (a.xyz == undefined)
    console.log('(1) a.xyz is Undefined');
else
    console.log('(1) a.xyz is not undefined');

if (typeof a.xyz === 'undefined')
    console.log('(2) a.xyz is Undefined');
else
    console.log('(2) a.xyz is not undefined');

if (typeof a.cc === 'undefined')
    console.log('a.cc is Undefined');
else
    console.log('a.cc is not undefined');

console.log('a.cc: ', a.cc);

if (a.cc == null)
    console.log('a.cc is null');
else
    console.log('a.cc is not null');
