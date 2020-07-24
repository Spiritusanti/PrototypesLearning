// apparently this will be tough to understand! But here we go!

// JavaScript uses prototypal inheritance. An object gets access to the properties and methods of another object. e.g. arrays get access to the props and methods of object{}

// first example working back up the inheritance chain:

const array = [];

array._proto_ 
//returns an array of properties and methods

array._proto_._proto_ //returns the base object, what everything in JavaScript gets created from

// now let's do a function example: 
function a() {}

a._proto_ 
//returns the base function that all functions are created from

// going up the chain again:
a._proto_._proto_ 
//returns the base object again like we did in the array example


// final example using objects

const obj1 = {}

// calling _proto_
obj1._proto_
// returns the base object as expected!