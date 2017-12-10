/*
 * Copyright (c) 2017. Yuriy Stul 
 */
'use strict';
// Ascending sort
let dates = [];
dates.push(new Date());
setTimeout(() => {
    dates.push(new Date());
    setTimeout(() => {
        dates.push(new Date());
        dates.sort((d1, d2) => (d1.getTime() - d2.getTime()));
        console.log({dates});
    }, 2000)
}, 2000);
