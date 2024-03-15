/// String concatination
var string = "Hello";
string += "World";
console.log(string + "!");

// Regular math opertors
console.log((5 + 4) / 3);
console.log(undefined / 5);

function test1 (a) {
    console.log ( a / 5);
}
test1();

//Equality
var x = 4, y = 4;
if( x == y ) {
    console.log(" x=4 is equal to y=4");
}

// type coercion ******
x = "4";
if( x == y ) {
    console.log(" x=4 is equal to y=4");
}

// to avoid up -> Strict equality 
if( x === y ) {
    console.log(" String x='4' is equal to y=4");
} else {
    console.log(" String x='4' is NOT equal to y=4");
}

// If statement (all false)
if( false || null || undefined || "" || 0 || NaN ) {
    console.log("This line won't ever execute");
}
else {
    console.log("All false");
}

// If statement (all true)
if(  true && "hello" && 1 && -1 && "false" ) { // anything except 0 is true
    console.log("All true");
}

// Best practice for {} style
// Curly brace on the same or next line
// Is it just a style?
function a() 
{
    return // ıt looks and see nothing so it returns nothing :)
    {
        name: "Meow"
    };
}

function b() {
    return     {
        name: "Meow"
    };
}

console.log(a());
console.log(b());

// For loop
var sum = 0;
for ( var i = 0; i < 10; i++) {
    sum += i;
}

console.log(sum);

var sum = 0;
for ( var i = 0; i < 15; i++) {
    sum += i;
}

console.log(sum);