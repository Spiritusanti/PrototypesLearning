// // apparently this will be tough to understand! But here we go!

// // JavaScript uses prototypal inheritance. An object gets access to the properties and methods of another object. e.g. arrays get access to the props and methods of object{}

// // first example working back up the inheritance chain:

// const array = [];

// array._proto_ 
// //returns an array of properties and methods

// array._proto_._proto_ //returns the base object, what everything in JavaScript gets created from

// // now let's do a function example: 
// function a() {}

// a._proto_ 
// //returns the base function that all functions are created from

// // going up the chain again:
// a._proto_._proto_ 
// //returns the base object again like we did in the array example


// // final example using objects

// const obj1 = {}

// // calling _proto_
// obj1._proto_
// // returns the base object as expected!

// Time for an example!

let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire){
       return `I am ${this.name}, the breather of fire`
    }
   
  }
}


let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  },
}

// if we want lizard to inherit all the properties from dragon:
// lizard.__proto__ = dragon;

// lizard.sing() //returns string after traveling up the prototype chain up to dragon

// lizard.fire //returns true

// lizard.fight() //returns 1 because fight is already defined in lizard

// // what if we run:
// dragon.isPrototypeOf(lizard)
// // returns true. Under the hood JavaScript get's told to run the method .isPrototypeOf and when it doesn't find it in the dragon object it goes up the prototype chain to the base object. 

// // how about:
// lizard.isPrototypeOf(dragon)
// // returns false because, lizard is downstream on the prototype chain from dragon.

lizard.__proto__ = dragon;
// using __proto__ is not advisable under normal circumstances due to bad performance impacts

// calling this for loop without the hasOwnProperty returns all the props from dragon along with lizard
for (let prop in lizard){
  // hasOwnProperty allows us to limit the loop to properties only in the current object.
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop)
  }
}