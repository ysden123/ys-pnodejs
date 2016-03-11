/*
Playing with callback
*/
function f1(p1, callback) {
  console.log('==>f1');
  setTimeout(callback, 1000, p1);
  console.log('<==f1');
}

function c1(data) {
  console.log('==>c1');
  setTimeout(() => {}, 1000);
  console.log(`data: ${data}`);
  console.log('<==c1');
}

console.log('Start.');

f1('the test data', c1);

/*
f1('the test data', (data) => {
  c1(data);
});

setTimeout(() => {console.log('Exit!');}, 2000);
*/

console.log('Finish');
