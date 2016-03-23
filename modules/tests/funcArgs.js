// Playing with args of functions
'use strict';

function f1(a1, c) {
    if (c != undefined)
        c(a1);
    else
        console.log('No call back is specified. 1st arg is:', a1);
}

f1('the 1st');
f1('the 1st', (a)=>{
    console.log("I'm callback! a:", a);
});