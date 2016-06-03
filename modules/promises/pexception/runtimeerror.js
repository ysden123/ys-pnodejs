// Promise with internal runtime err
'use strict';

function err1() {
    return 1 / a;
}

function runWOTryCatch() {
    console.log(err1());
}

function runWithTryCatch() {
    try {
        console.log(err1());
    } catch (err) {
        console.error(err);
    }
}

function p1() {
    return new Promise((resolve, reject) => {
        runWOTryCatch();
        resolve();
    })
}

function rp1() {
    p1()
        .then(() => console.log('done'))
        .catch(err => console.log('Error: ' + err));
}

function p2() {
    return new Promise((resolve, reject) => {
        runWithTryCatch();
        resolve();
    })
}

// Wrong
function rp2() {
    p2()
        .then(() => console.log('done'))
        .catch(err => {
            console.log('Failed executing rp2.');
            console.error('Error: ' + err)
        });
}


function p3() {
    return new Promise((resolve, reject) => {
        runWithTryCatch();
        resolve();
    })
}

// Right
function rp3() {
    p1()
        .then(() => { return p3(); })
        .then(() => console.log('done'))
        .catch(err => {
            console.log('Failed executing rp3.');
            console.error('Error: ' + err)
        });
}

// Best practise
function rp4() {
    (new Promise((resolve, reject) => {
        try {
            let rslt = err1();
            resolve(rslr);
        }
        catch (err) {
            // Log error
            console.error('Logged err:' + err);
            // Send signal about error
            reject(err);
        }
    }))
        .then(r => {
            console.log('Result:', r);
            console.log('done');
        })
        .catch(err => {
            console.log('Failed executing rp4.');
            console.error('Error: ' + err);
        });
}

function usage() {
    console.log('usage: node runtimeerror <mode>');
    console.log('mode:');
    console.log('\t1\trunWOTryCatch()');
    console.log('\t2\trunWithTryCatch()');
    console.log('\t3\rp1()');
    console.log('\t4\rp2()');
    console.log('\t5\rp3()');
    console.log('\t6\rp4()');
}

let funcs = [];
funcs[0] = runWOTryCatch;
funcs[1] = runWithTryCatch;
funcs[2] = rp1;
funcs[3] = rp2;
funcs[4] = rp3;
funcs[5] = rp4;

let mode = process.argv[2];
if (mode === undefined || (Number(mode) < 1 || Number(mode) > funcs.length)) {
    usage();
} else {
    funcs[mode - 1]();
}   