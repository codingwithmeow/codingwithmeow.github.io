// var array = new Array();
// array[0] = "Meow";
// array[1] = 5;
// array[2] = function (name) {
//   console.log("Hello " + name);
// };
// array[3] = {course: " HTML, CSS & JS"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// // Short hand array creation
// var names = ["Meow", "Chat", "Mieze"];
// console.log(names);

// for (var i = 0; i < names.length; i++) { //length is a property
//   console.log("Hello " + names[i]);
// }

// names[100] = "Kitty";
// for (var i = 0; i < names.length; i++) { //length is a property
//     console.log("Hello " + names[i]);
// }

var myObj = {
    name: "Meow",
    course: "HTML/CSS/JS",
    platform: "Coursera"
};

for (prop in myObj) {
    console.log(prop + ": " + myObj[prop])
}

var names2 = ["Meow", "Chat", "Mieze"];

for ( var name in names2) {
    console.log("Hello " + names2[name] )
}

names2.greeting = "Hi!";

for (var name in names2) {
  console.log("Hello " + names2[name]);
}