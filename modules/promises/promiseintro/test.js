'use strict'
/**
* Just to try something.
**/

function foo() {
  var a = 'a';
  a = a + 'b';
  a = a + 'c';
  return Promise.resolve(a);
};

// Using foo
var r = foo();
console.log('r: ', r);

// Using promise

var success = true;
var promise = new Promise(function(resolve, reject) {
  if (success) {
    resolve("Stuff worked!");
  } else {
    reject(Error("It broke"));
  }
});

promise.then(function(result) {
  console.log("Done with: ", result);
}, function(err) {
  console.log("Error with: ", err);
});

success = false;
promise = new Promise(function(resolve, reject) {
  if (success) {
    resolve("Stuff worked!");
  } else {
    reject(Error("It broke"));
  }
});

promise.then(function(result) {
  console.log("Done with: ", result);
}, function(err) {
  console.log("Error with: ", err);
});
