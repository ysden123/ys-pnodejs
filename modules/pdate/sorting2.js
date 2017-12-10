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
            let t1 = d1.getTime();
            let t2 = d2.getTime();
            if (t1 < t2)
                return 1;
            else if (t1 > t2)
                return -1;
            else
                return 0
        });
        console.log({dates});
    },2000)
},2000);
