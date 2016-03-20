// Playing with timers: setInterval with closure
'use strict';
let intervalObject;
function f(arg) {
    console.log(`arg=${arg}`);
    let count = 0;
    return () => {
        ++count;
        if (count > 3) {
            clearInterval(intervalObject);
            return;
        }
        console.log(`arg=${arg}, count=${count}`);
    }
}

var ff = f(123);

intervalObject = setInterval(ff, 1000, 345);


