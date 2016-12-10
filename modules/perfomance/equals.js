/**
 * Created by Yuriy Stul on 12/10/2016.
 */
/**
 * Compare performance of '==' operator and '===' operator.
 */
'use strict';
const n = 100000000;
const v1 = 2.123456;
const v2 = 2.123456;
const s = '2.123456';

/**
 * Check how long is operation '=='
 */
((n) => {
    console.log("==> (1) ==");
    const start = new Date();

    for (let i = 0; i < n; ++i) {
        let t = v1 == v2
    }

    const end = new Date();
    console.log(`operator (1) ==, average duration is ${(end - start) / n} ms`);

    console.log("<== (1) ==");
})(n);

/**
 * Check how long is operation '=='
 */
((n) => {
    console.log("==> (2) ==");
    const start = new Date();

    for (let i = 0; i < n; ++i) {
        let t = v1 == s
    }

    const end = new Date();
    console.log(`operator (2) ==, average duration is ${(end - start) / n} ms`);

    console.log("<== (2) ==");
})(n);

/**
 * Check how long is operation '==='
 */
((n) => {
    console.log("==> (1) ===");
    const start = new Date();

    for (let i = 0; i < n; ++i) {
        let t = v1 === v2
    }

    const end = new Date();
    console.log(`operator (1) ===, average duration is ${(end - start) / n} ms`);

    console.log("<== (1) ===");
})(n);

/**
 * Check how long is operation '==='
 */
((n) => {
    console.log("==> (2) ===");
    const start = new Date();

    for (let i = 0; i < n; ++i) {
        let t = v1 === s
    }

    const end = new Date();
    console.log(`operator (2) ===, average duration is ${(end - start) / n} ms`);

    console.log("<== (2) ===");
})(n);
