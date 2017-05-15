/*
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';
function analyze(v){
    if (v){
        console.log('if (v) is true');
    }else{
        console.log('if (v) is false');
    }

    if (!v){
        console.log(`if (!v) is true`);
    }else{
        console.log(`if (!v) is false`);
    }

    if (v === undefined){
        console.log('if (v === undefined) is true');
    }else{
        console.log('if (v === undefined) is false');
    }

    if (v === null){
        console.log('if (v === null) is true');
    }else{
        console.log('if (v === null) is false');
    }
}

let t1;
console.log('t1');
analyze(t1);

console.log('t2');
let t2 = null;
analyze(t2);

console.log('t3');
let t3 = undefined;
analyze(t3);
