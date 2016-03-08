/*
Playing with Promise.resolve
*/

var v1 = Promise.resolve(1)
console.log('v1=', v1);

Promise.resolve(2)
  .then(function(value) {
    console.log('(1) value: ', value);
  })

Promise.resolve([3, 4, 5])
  .then(function(value) {
    console.log('(2) value: ', value);
  })

// Resolving a thenable object
var p1 = Promise.resolve({
  then: function(onFulfill, onReject) {
    onFulfill("fulfilled!");
  }
});
console.log(p1 instanceof Promise) // true, object casted to a Promise

p1.then(function(v) {
  console.log('(3):', v); // "fulfilled!"
}, function(e) {
  // not called
});
