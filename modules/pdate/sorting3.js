/*
 * Copyright (c) 2017. Yuriy Stul 
 */
'use strict';
// Descending sort
let dates = [];
dates.push(new Date());
setTimeout(() => {
    dates.push(new Date());
    setTimeout(() => {
        dates.push(new Date());
        dates.sort((d1, d2) => (d2.getTime() - d1.getTime()));
        console.log({dates});
    }, 2000)
}, 2000);
