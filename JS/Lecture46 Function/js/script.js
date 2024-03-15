// Functions are first-calss data types
// Functions are objects
function multiply (x, y) {
    return x * y;
}

console.log(multiply(5, 3));

multiply.version = "v.1.0.0";
console.log(multiply);
console.log(multiply.toString());
console.log(multiply.version);

// Function factory
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x;
    };
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// Passing functions as argumewnts
function doOperationOn(x, operation) {
    return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);

result = doOperationOn(10, doubleAll);
console.log(result);