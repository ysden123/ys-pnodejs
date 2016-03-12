'use strict';
// Playing with chains of propmises

var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Switches the promise into state fulfilled with result "done"
    resolve('done');
  }, 1000);
});

console.log('Running promis1 with two "then"s');
promise1
  .then(result => console.log('(1) 1st the. result is %s', result))
  .then(result => console.log('(1) 2nd the. result is %s', result))
  .catch(error => console.log('(1) Error: %s', error));

var promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Switches the promise into state rejected with result "error of execution"
    reject('error of execution');
  }, 1000);
});

console.log('Running promise2 with two "then"s');
promise2
  .then(result => console.log('(2) 1st the. result is %s', result))
  .then(result => console.log('(2) 2nd the. result is %s', result))
  .catch(error => console.log('(2) Error: %s', error));

var promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Switches the promise into state fulfilled with result "done in #3"
    resolve('done in #3');
  }, 1000);
});

var promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Switches the promise into state fulfilled with result "done in #4"
    resolve('done in #4');
  }, 1000);
});

console.log('Running two promises (3 and 4).');
promise3
  .then(result => {
    console.log('Result of the promise3 is %s', result);
    return promise4;
  })
  .then(result => {
    console.log('Result of the promise4 is %s', result);
  })
  .catch(error => console.log('Failure. %s', error));
