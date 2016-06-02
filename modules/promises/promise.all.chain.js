'use strict'

function work1() {
    console.log('==>work1');
    let promise = new Promise((resolve, reject) => {
        let a1 = [];

        for (let i = 1; i <= 3; ++i) {
            a1.push(new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`a1 i=${i}`);
                    resolve();
                }, 500 * (4 - i));
            }))
        }
        return Promise
            .all(a1)
            .then(() => resolve());
    });
    return promise;
}

function work2() {
    console.log('==>work2');
    let promise = new Promise((resolve, reject) => {
        let a2 = [];

        for (let i = 1; i <= 3; ++i) {
            a2.push(new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`a2 i=${i}`);
                    resolve();
                }, 90 * (4 - i));
            }))
        }
        return Promise
            .all(a2)
            .then(() => resolve());
    });
    return promise;
}

function foo() {
    let promise = new Promise((resolve, reject) => {
        work1()
            .then(() => { return work2() })
            .then(() => resolve());
    });
    return promise;
}

console.log('call foo');
foo()
    .then(() => console.log('completed'));