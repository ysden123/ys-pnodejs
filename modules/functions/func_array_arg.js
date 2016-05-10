'use strict';

function f1([a]) {
    console.log('\nf1');
    console.log(`arguments.length: ${arguments.length}`);
    console.log({ a: a });
}

f1([1, 2, 3, 4, 5]);

function f2([a, b]) {
    console.log('\nf2');
    console.log(`arguments.length: ${arguments.length}`);
    console.log({ a: a, b: b });
}

f2([1, 2, 3, 4, 5]);

function f3(a) {
    console.log('\nf3');
    console.log(`arguments.length: ${arguments.length}`);
    console.log({ a: a});
}

f3([1, 2, 3, 4, 5]);