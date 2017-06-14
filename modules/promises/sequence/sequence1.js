/*
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';

function test1(n) {
    let items = [];
    for (let i = 1; i <= n; ++i) {
        items.push(i)
    }

    return items.reduce((promise, item) => promise.then(() => job(item)), Promise.resolve());
}

function job(i) {
    return new Promise((resolve) => {
        console.log(`Initialize job(${i})`);
        setTimeout(() => {
            console.log(`${i}`);
            resolve()
        }, Math.floor(Math.random() * 1000))
    })
}

test1(10).then(() => {
    console.log(`Completed test1`);
});