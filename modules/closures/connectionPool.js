/**
 * Created by Yuriy Stul on 10/5/2016.
 */
'use strict';

function initConnectionPool(){
    console.log('==>initConnectionPool');
    console.log('creating connection pool');
    let pool = 'abc';

    // Closure
    return () => {
        return pool;
    }
}

console.log('P 001');
const getPool = initConnectionPool();

console.log('P 002');

console.log(`(1) connection = ${getPool()}`);
console.log(`(2) connection = ${getPool()}`);
console.log(`(3) connection = ${getPool()}`);
console.log(`(4) connection = ${getPool()}`);