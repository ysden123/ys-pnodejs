/*
 * Copyright (c) 2017. Yuriy Stul
 */

'use strict';

/*
Playing async\await
See https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
6 Reasons Why JavaScript’s Async/Await Blows Promises Away (Tutorial)
 */

/**
 * Some function, working as promise
 * @returns {Promise}
 */
function somePromise(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`somePromise is working with ${data}`);
            resolve(`Good luck for ${data}!`)
        }, 1000)
    })
}

/**
 * Use a promise-function without async/await
 */
function useSomePromiseWOAsync() {
    console.log('==>useSomePromiseWOAsync');
    somePromise('data w/o Async')
        .then((r) => console.log(`useSomePromiseWOAsync: after somePromise. Result is ${r}`));
    console.log('<==useSomePromiseWOAsync');
}

/**
 * Use a promise-function with async/await
 * @returns {Promise.<void>}
 */
async function useSomePromiseWithAsync() {
    console.log('==>useSomePromiseWithAsync');
    let r = await somePromise('data with Async');
    console.log(`useSomePromiseWithAsync: after somePromise. Result is ${r}`);
    console.log('<==useSomePromiseWithAsync');
}

useSomePromiseWOAsync();
useSomePromiseWithAsync();