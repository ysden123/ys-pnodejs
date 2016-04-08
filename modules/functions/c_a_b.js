// Call, apply, and bind
'use strict';
const bruce = { name: 'Bruce' }
const madlen = { name: 'Madlen' }

function greet() {
    return `Hello, I'm ${this.name}!`;
}

// Call without bounding. 
console.log(greet.call(bruce));
console.log({ bruce: bruce, madlen: madlen });
console.log(greet.call(madlen));
console.log({ bruce: bruce, madlen: madlen });

function update(bithday,occupation){
    this.birthday = bithday;
    this.occupation = occupation;
}
console.log();

// Call with bounding.
update.call(bruce, 1234, 'doctor');
console.log({ bruce: bruce, madlen: madlen });
update.call(madlen, 4321,'developer');
console.log({ bruce: bruce, madlen: madlen });console.log();
console.log();

// Apply with bounding.
update.apply(bruce, [5678, 'actor']);
console.log({ bruce: bruce, madlen: madlen });
update.apply(madlen, [2132,'writer']);
console.log({ bruce: bruce, madlen: madlen });