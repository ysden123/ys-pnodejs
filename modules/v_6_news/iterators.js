/**
 * Demonstrates usage of iterators.
 *
 * Iterator & For-Of Operator
 * Support "iterable" protocol to allow objects
 * to customize their iteration behaviour.
 * Additionally, support "iterator" protocol to produce
 * sequence of values (either finite or infinite).
 * Finally, provide convenient of operator to iterate over all values of an iterable object.
 *
 * Doesn't work on NodeJs 4.
 *
 * Created by Yuriy Stul on 2/12/2017.
 */
'use strict';
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next () {
                [pre, cur] = [cur, pre + cur];
                return {done: false, value: cur}
            }
        }
    }
};

for (let n of fibonacci) {
    if (n > 10)
        break;
    console.log(n)
}