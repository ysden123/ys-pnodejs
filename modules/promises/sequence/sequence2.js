/*
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';

/**
 * Ignore error
 */
function test1(n) {
    let items = [];
    for (let i = 1; i <= n; ++i) {
        items.push(i)
    }

    return items.reduce((promise, item) => promise
        .then(() => job1(item))
        .catch(err => {
            console.log(`Occurred error ${err.message}`);
            return Promise.resolve()    // Ignore
        }), Promise.resolve());
}

function job1(i) {
    return new Promise((resolve, reject) => {
        console.log(`Initialize job1(${i})`);
        setTimeout(() => {
            console.log(`${i}`);
            if (i === 5) {
                console.log('Rejected for 5');
                reject(new Error('test reject'));
            }
            else {
                resolve()
            }
        }, Math.floor(Math.random() * 1000))
    })
}

/**
 * Stop execution after 1st error
 */
function test2(n) {
    let items = [];
    for (let i = 1; i <= n; ++i) {
        items.push(i)
    }

    let errorOccurred = false;
    return items.reduce((promise, item) => promise
        .then(() => (!errorOccurred ? job2(item) : Promise.resolve()))
        .catch(err => {
            // console.log(`Occurred error ${err.message}`);
            errorOccurred = true;
            return Promise.reject(err)
        }), Promise.resolve());
}

function job2(i) {
    return new Promise((resolve, reject) => {
        console.log(`Initialize job2(${i})`);
        setTimeout(() => {
            console.log(`${i}`);
            if (i === 5) {
                console.log('Rejected for 5');
                reject(new Error('test reject'));
            }
            else {
                resolve()
            }
        }, Math.floor(Math.random() * 1000))
    })
}

test1(10)
    .then(() => {
        console.log(`Completed test1\n`);
        return test2(10)
    })
    .then(() => {
        console.log(`Completed test2`);
    })
    .catch(err => {
        console.log(`Total error: ${err.message}`);
    });

// test2(10)
//     .then(() => {
//         console.log(`Completed test2\n`);
//         return test1(10)
//     })
//     .then(() => {
//         console.log(`Completed test1`);
//     })
//     .catch(err => {
//         console.log(`Total error: ${err.message}`);
//     });