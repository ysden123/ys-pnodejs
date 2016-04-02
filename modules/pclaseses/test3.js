// Playing with classes. Using Object.create(protoype).
const myBaseObject = { myProperty: 'oh hai' }

const myNewObject = Object.create(myBaseObject)
myNewObject.newMethod = () => { console.log(myBaseObject.myProperty) }

// Running.
myNewObject.newMethod();
