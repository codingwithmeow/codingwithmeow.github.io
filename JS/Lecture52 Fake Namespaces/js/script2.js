// var name = "Kitty";
// function sayHi() {
//     console.log("Hello " + name);

// }

(function (window) {
    var kittyGreeter = {};
    kittyGreeter.name = "Kitty";
    var greeting = "Hi ";
    kittyGreeter.sayHi = function () {
      console.log(greeting + kittyGreeter.name);
    }
  
    window.kittyGreeter = kittyGreeter;
  
  })(window);
  
  
  