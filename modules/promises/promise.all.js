'use strict'

let a1 = [];

for (let i = 1; i <= 3; ++i) {
    a1.push(new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`a1 i=${i}`);
            resolve();
        }, 500);
    }))
}


Promise.all(a1)
    .then(() => console.log('a1 done'));