// Playing with promises.
'use strict';

function foo() {
    return 'foo';
}
function bar() {
    return 'bar';
}

Promise.resolve()
    .then(() => {
        console.log('\nCall foo()');
        return foo()
    })
    .then(r => {
        console.log('\nr=', r);
        console.log('Call bar');
        return bar()
    })
    .then(r => console.log('\nr=', r))
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Work');
                resolve();
            }, 1000);
        })
    })
    .then(() => console.log('Done'))
    .catch(err => console.error(err))