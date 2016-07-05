'use strict';
const _ = require('underscore');

let func1 = function(greeting){ return greeting + ': ' + this.name };
func1 = _.bind(func1, {name: 'moe'}, 'hi');
let v1 = func1();
console.log({v1:v1});

/**
 * Throws exception "TypeError: Cannot read property 'name' of undefined""
 */
// let func2 = function(greeting){ return greeting + ': ' + this.name };
// // func2 = _.bind(func2, {name: 'moe'}, 'hi');
// let v2 = func2();
// console.log({v2:v2});