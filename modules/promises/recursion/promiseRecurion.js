/**
 * Created by Yuriy Stul on 10/12/2016.
 */
'use strict';

const limit = 10;

function longProcess(item) {
    return new Promise((resolve)=> {
        if (item < limit) {
            setTimeout(()=> {
                console.log(`in longProcess, item =${item}`);
                resolve(true)
            }, 50)
        } else {
            resolve(false)
        }
    })
}

function work(item) {
    return new Promise((resolve) => {
        console.log(`call longProcess, item=${item}`);
        longProcess(item)
            .then(toContinue => {
                if (toContinue) {
                    // recursion
                    work(item + 1)
                } else {
                    resolve()
                }
            })
    })
}

console.log('start');
work(1)
    .then(() => {
        console.log('finish');
    });