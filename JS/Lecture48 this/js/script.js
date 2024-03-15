// function test() {
//     console.log("hello");
//     console.log(this)
//     this.myName = "Meow";
// }

// test()
// console.log(window.myName)

// // Function constructors
// function Circle(radius) {
//     this.radius = radius;

//     this.getArea = 
//     function () {
//         return Math.PI * Math.pow(this.radius, 2) 
//     };
// }

// var myCircle = new Circle(10); //new object
// console.log(myCircle);
// console.log(myCircle.getArea());

// Prototype is that a It is there to relax the memory 
// by not constantly creating something new but writing over it.
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getArea = 
    function () {
        return Math.PI * Math.pow(this.radius, 2) 
    };

var myCircle = new Circle(10); //new object
console.log(myCircle);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20); //new object
console.log(myOtherCircle);
console.log(myOtherCircle.getArea());