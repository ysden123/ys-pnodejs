/*
 * Copyright (c) 2017. Yuriy Stul 
 */

'use strict';

/*Playing with deep copy*/

function wrongDeepCopy(obj) {
    return obj
}

function deepCopyWithJson(obj) {
    return JSON.parse(JSON.stringify(obj))
}

function deepCopyWithAssign(obj) {
    return Object.assign({}, obj)
}

function initOrigObject() {
    return {m1: 'member 1', m2: 'member 2'};
}

let origObj = initOrigObject();
let wrongCopy = wrongDeepCopy(origObj);
wrongCopy.m2 = 'changed';
console.log({method: 'wrongDeepCopy', origObj, wrongCopy});

origObj = initOrigObject();
let copyWithJson = deepCopyWithJson(origObj);
copyWithJson.m2 = 'changed';
console.log({method: 'deepCopyWithJson', origObj, copyWithJson});


origObj = initOrigObject();
let copyWithAssign = deepCopyWithAssign(origObj);
copyWithAssign.m2 = 'changed';
console.log({method: 'deepCopyWithAssign', origObj, copyWithAssign});