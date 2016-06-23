'use strict';

let a = [1, 2, 3, 4, 5];

let r = a.forEach(i => {
    if (i == 3)
        return 'found';
})
console.log({ r: r });

r = 'not found';
a.forEach(i => {
    if (i == 3) {
        r = 'found';
        return;
    }
})
console.log({ r: r });