/*
Playing with text formatting
*/
var user = new Object();
user.first = 'Yuriy';
user.last = 'Stul';
user.age = 10.1;

console.log("Hi, %s %s!", user.first, user.last);
console.log("%s is %d years old!", user.first, user.age);
console.log("%s is %d years old!", user.first, user.age);

console.log('(1) user', user);

console.log('(2) user %s!', user);

console.log(`(1) Dollar test: ${user}`);
console.log(`(2) Dollar test: ${user.first}`);
console.log(`(3) Dollar test: ${user.last}`);
console.log(`(4) Dollar test: ${user.age}`);

console.dir(user);

console.dir(user, { colors: true });

console.log("111 ", " 2222", " 333", " 4444");

console.log("%s %s %s", "111 ", " 2222", " 333", " 4444");

console.log('%02d', 1);
console.log('%02d', 12);
console.log(Number(1).toFixed(2));

function padToTwo(number) {
    if (number <= 99) { number = ("0" + number).slice(-2); }
    return number;
}
console.log(padToTwo(1));
console.log(padToTwo(12));

console.log(("0" + 1).slice(-2));
console.log(("0" + 12).slice(-2));

var n = 1; 
console.log(("0" + n).slice(-2));
n = 12;
console.log(("0" + n).slice(-2));
