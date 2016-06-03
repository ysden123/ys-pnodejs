// Promises on chain without return.
'use strict';

function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('p1');
            resolve();
        }, 500);
    })
}

function p2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('p2');
            resolve();
        }, 300);
    })
}

function p3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('p3');
            resolve();
        }, 200);
    })
}




let mode = process.argv[2];
if (mode === undefined) {
    console.error('usage: node chain1 <0|1|2>');
} else {
    mode = Number(mode);
    switch (mode) {
        case 0:
            /*************************
             * incorrect code
             */
            console.log('incorrect code');
            p1()
                .then(() => {
                    p2()
                })
                .then(() => {
                    p3()
                })
                .then(() => console.log('done 1'));
            break;
        case 1:
            /****
             *  Correct code 1
             */
            console.log('correct code 1');
            p1()
                .then(() => {
                    return p2()
                })
                .then(() => {
                    return p3()
                })
                .then(() => console.log('done 2'));
            break;
        case 2:
            /****
             * Correct code 2
             */
            console.log('correct code 2');
            console.log('call p1');
            p1()
                .then(() => {
                    console.log('call p2');
                    return p2()
                })
                .then(() => {
                    console.log('call p3');
                    return p3()
                })
                .then(() => console.log('done 2'));
            break;
        default:
            console.error('usage: node chain1 <0|1|2>');
    }
}   