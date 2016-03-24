// Playing with timers: setInterval with promise
'use strict';
function poll(arg) {
    let promise = new Promise((resolve, reject) => {
        let intervalObject;
        let count = 0;
        function makePoll() {
            ++count;
            console.log('count is', count, ',arg is', arg);
            if (count > 3) {
                clearInterval(intervalObject);
                resolve('Done');
                return;
            }
        }

        intervalObject = setInterval(makePoll, 1000, count);
    });

    return promise;
}

poll('the arg value')
    .then(result => console.log('result is', result))
    .catch(e => console.log('The error is', e));