// var x = function () {
//     console.log("Hello World");
//     return;
//   };
//   x = "hello, I am a new value!";

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();