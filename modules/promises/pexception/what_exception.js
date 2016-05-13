// Checking what exception will be printed
'use strict';

////////////////////////////////////////////////
// Following code will NOT print exceptions!
Promise
    .resolve('promised value')
    .then(() => {
        throw new Error('error 1');
    });

Promise
    .reject('error value')
    .catch(() => {
        throw new Error('error 2');
    });

new Promise((resolve, reject) => {
    throw new Error('error 3');
});

/////////////////////////////////////////
// Following code will print exceptions!
Promise
    .resolve('promised value')
    .then(() => {
        throw new Error('error 4');
    })
    .catch(err => console.error(err));

Promise
    .reject('error value')
    .catch(() => { throw new Error('error 5') })
    .catch(err => console.error(err));

new Promise((resolve, reject) => {
    try {
        throw new Error('error 6');
    }
    catch (err) {
        console.error(err);
    }
})

new Promise((resolve, reject) => {
    reject(new Error('error 7'));
}).catch(err => console.error(err));
