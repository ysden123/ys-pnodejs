// Playing with classes
// Original: Краткая заметка про наследование в Node.js https://habrahabr.ru/post/247325/
var util = require('util');

function ParentClass(par1, par2) {
    this.parentField1 = par1;
    this.parentField2 = par2;
}

function ChildClass(par1, par2) {
    ChildClass.super_.apply(this, arguments);
    this.childField1 = par1;
    this.childField2 = par2;
}

// Inheritence
util.inherits(ChildClass, ParentClass);

var obj = new ChildClass('Hello', 'World');
console.dir({ obj: obj });

