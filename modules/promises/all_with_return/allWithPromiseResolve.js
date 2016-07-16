'use strict';

function p(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('val' + i);
        }, 100 + Math.random() * 1000)
    });
}

let a = [];
for (let i = 1; i <= 10; ++i) {
    a.push(
        p(i)
            .then(v => {
                return Promise.resolve({ k: 'k' + i, v: v });
            })
    )
}
Promise.all(a)
    .then(rslt => {
        rslt.forEach(r => {
            console.log(`k=${r.k}, v=${r.v}`);
        })
    })