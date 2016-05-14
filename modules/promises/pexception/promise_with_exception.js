// Promise with exception
`use strict`

function p1(testName, throwException) {
    return new Promise((resolve, reject) => {
        console.log(`Executing ${testName}`);
        if (throwException) {
            console.log(`Throw exception (${testName})`);
            throw new Error('Exception from p1');
        }
        console.log(`Resolvig (${testName})`);
        resolve();
    })
}

function p2(testName, throwException) {
    return new Promise((resolve, reject) => {
        console.log(`Executing ${testName}`);
        p1(testName, throwException)
            .then(() => resolve())
            .catch(e => reject(e))
    })
}

setTimeout(() => {
    const testName = 'no exception'
    console.log();
    console.log(`Testing ${testName}`);
    p1(testName, false)
        .then(() => console.log(`${testName} was completed successfully`))
        .catch(e => console.log(`${testName} was completed unsuccessfully: ${e}`))
}, 500);

setTimeout(() => {
    const testName = 'with exception (1)'
    console.log();
    console.log(`Testing ${testName}`);
    p1(testName, true)
        .then(() => console.log(`${testName} was completed successfully`))
        .catch(e => console.log(`${testName} was completed unsuccessfully: ${e}`))
}, 1000);

setTimeout(() => {
    const testName = 'no exception (2)'
    console.log();
    console.log(`Testing ${testName}`);
    p2(testName, false)
        .then(() => console.log(`${testName} was completed successfully`))
        .catch(e => console.log(`${testName} was completed unsuccessfully: ${e}`))
}, 1500);

setTimeout(() => {
    const testName = 'with exception (3)'
    console.log();
    console.log(`Testing ${testName}`);
    p2(testName, true)
        .then(() => console.log(`${testName} was completed successfully`))
        .catch(e => console.log(`${testName} was completed unsuccessfully: ${e}`))
}, 2000);
