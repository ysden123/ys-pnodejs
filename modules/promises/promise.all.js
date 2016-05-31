'use strict'

let a1 = [];

for (let i = 1; i <= 3; ++i) {
    a1.push(new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`a1 i=${i}`);
            resolve();
        }, 100 * (4 - i));
    }))
}

Promise
    .all(a1)
    .then(() => {
        console.log('a1 done')
        let a2 = [];

        for (let i = 1; i <= 3; ++i) {
            a2.push(new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`a2 i=${i}`);
                    resolve();
                }, 90 * (4 - i));
            }))
        }
        return Promise.all(a2);
    })
    .then(() => console.log('a2 done'));