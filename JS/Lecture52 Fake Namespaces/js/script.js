// var name = "Meow";
// function sayHello() {
//     console.log("Hello " + name);

// }

(function (window) {
    var meowGreeter = {};
    meowGreeter.name = "Meow";
    var greeting = "Hello ";
    meowGreeter.sayHello = function () {
        console.log(greeting + meowGreeter.name);
    }

    window.meowGreeter = meowGreeter;
})(window)