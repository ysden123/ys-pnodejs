/*
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';
const util = require('util');

try{
    throw new Error("error text 1")
}
catch(err){
    console.log(util.inspect(err,{ showHidden: true, depth: true }));
}
console.log('-----------');
try{
    throw "error text 2"
}
catch(err) {
    console.log(util.inspect(err, {showHidden: true, depth: true}));
}
