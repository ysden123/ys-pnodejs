/*
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';

/**
 * Created by Yuriy Stul on 4/26/2017.
 */

const C2 = require('./c2').C2;

let c2 = new C2('p1 value', 'p2 value');
console.log(c2);
console.log({c2: c2});
console.log(`c2.toString(): ${c2.toString()}`);