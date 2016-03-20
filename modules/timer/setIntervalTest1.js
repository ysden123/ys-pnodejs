// Playing with timers: setInterval
'use strict';
let intervalObject;
let count = 0;
function f(arg) {
    ++count;
    if (count > 3) {
        clearInterval(intervalObject);
        return;
    }
    console.log(`arg=${arg}, count=${count}`);
}

intervalObject = setInterval(f, 1000, count);


