'use strict'
/*
Playing with Promise.race and Promise.all
*/

var p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, "one");
});

var p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then(function(value) {
  console.log('value:', value);
  // Both resolve, but p2 is faster
});

var p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, "three");
});

var p4 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, "four");
});

Promise.race([p3, p4]).then(function(value) {
  console.log('value:', value);
  // Both resolve, but p3 is faster
});

var p5 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'five');
});

var p6 = new Promise(function(resolve, reject) {
  setTimeout(reject, 100, 'six');
})

Promise.race([p5, p6]).then(function(value) {
  // Not called
}, function(reason) {
  console.log('(1) reason:', reason);
});

Promise.all([p1, p2, p3, p4, p5]).then(function(values) {
  console.log('values: ', values);
});

Promise.all([p1, p2, p3, p4, p5, p6])
  .then(function(values) {
    // Not called
  }, function(reason) {
    console.log('(2) reason: ', reason);
  });
