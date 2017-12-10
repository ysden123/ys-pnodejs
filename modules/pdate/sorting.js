/*
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';
let dates = [];
dates.push(new Date());
setTimeout(()=>{
    dates.push(new Date());
    setTimeout(()=>{
        dates.push(new Date());
        dates.sort((d1,d2)=>{
            if (d1 < d2)
                return 1;
            else if (d1 > d2)
                return -1;
            else
                return 0
        });
        console.log({dates});
    },2000)
},2000);
