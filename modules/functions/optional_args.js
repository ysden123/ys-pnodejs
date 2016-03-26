// Playing with functions: the use optional arguments.
'use strict';

function f1(a1, a2) {
  console.log('f1: a1 is', a1, ', a2 is ', a2);
  if (a2 == undefined){
    console.log('a2 == undefined');
  }
}

f1('the a1', 'the a2');
f1('the a1');
